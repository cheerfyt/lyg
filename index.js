'use strict';
/**
 * lyg
 * CopyRight (c) 2017 YT <tate_fan@163.com>
 */
const slice = Array.prototype.slice;
const toStr = Object.prototype.toString;
const chalk = require('chalk');
const path = require('path');

/**!
 * get color function
 * @private
 */
const colorFn = (method, color) => chalk[color[method]];
const isObject = (obj) => toStr.call(obj) === '[object Object]';


/**!
 * add meta information
 * @private
 */
const format = (level, msg, opts) => {
  opts = opts || {};
  let line = opts.line;
  let method = opts.method;
  let file = opts.file;
  method = /anonymous/ig.test(method)? 'anonymous': method;
  let time = new Date().toLocaleString();
  return `[${time}]-[${level}]-[${file}]-[${line}]-[${method}]-msg: ${msg}`;
};


/**!
 * @desc get call stack info
 * @private
 */
const getStackInfo = function() {
  // https://github.com/v8/v8/wiki/Stack%20Trace%20API
  let data = {};
  let reg1 = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i;
  let reg2 = /at\s+()(.*):(\d*):(\d*)/i;

  let list = (new Error()).stack.split('\n').slice(3);
  let s = list[0];
  let sp = reg1.exec(s) || reg2.exec(s);
  if (sp && sp.length === 5) {
    data.method = sp[1];
    data.path = sp[2];
    data.line = sp[3];
    data.file = path.basename(data.path);
  }
  return data;
}


/**
 * @desc override console method
 */
const methods = ['log', 'info', 'warn', 'error', 'dir', 'trace'];
methods.forEach((method) => {
  let char = method.charAt(0).toLowerCase();
  exports[char] = function() {
    let args = slice.call(arguments);
    let opts = getStackInfo();
    let cFn = colorFn(method, colorMap);
    if ('dir' === method) {
      if (isObject(args[0])) args[0] = JSON.stringify(args[0]).replace('\n', ' ');
      args[0] = cFn(format(method, cFn(args[0]), opts));
      console.log.apply(console, args);
    } else {
      args[0] = cFn(format(method, cFn(args[0]), opts));
      console[method].apply(console, args);
    }
  };
});


/**
 * @desc default color setting
 */
const colorMap = {
  log:   'blue',
  info:  'cyan',
  error: 'red',
  warn:  'yellow',
  trace: 'magenta',
  dir:   'green'
};
