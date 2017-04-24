'use strict';

/**
 * lyg
 * CopyRight (c) 2017 YT <tate_fan@163.com>
 */
const slice = Array.prototype.slice;
const toStr = Object.prototype.toString;
const chalk = require('chalk');

/**!
 * get color function
 */
const colorFn = (method, color) => chalk[color[method]];
const isObject = (obj) => toStr.call(obj) === '[object Object]';

/**!
 * add meta information
 */
const format = (method, msg) => {
  let time = new Date();
  return `[${time}]-[${method}]-msg: ${msg}`;
};


const methods = [ 'log', 'info', 'warn', 'error', 'dir', 'trace' ];
const colorMap = {
  log:   'blue',
  info:  'cyan',
  error: 'red',
  warn:  'yellow',
  trace: 'magenta',
  dir:   'green'
};

methods.forEach((method) => {
  var char = method.charAt(0).toLowerCase();
  exports[char] = function() {
    let args = slice.call(arguments);
    let cFn = colorFn(method, colorMap);
    if ('dir' === method) {
      if (isObject(args[0])) args[0] = JSON.stringify(args[0]);
      args[0] = cFn(format(method, cFn(args[0])));
      console.log.apply(console, args);
    } else {
      args[0] = cFn(format(method, cFn(args[0])));
      console[method].apply(console, args);
    }
  };
});
