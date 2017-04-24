'use strict';
const slice = Array.prototype.slice;
const toStr = Object.prototype.toString;
const chalk = require('chalk');

const colorMap = {
  log:   'blue',
  info:  'cyan',
  error: 'red',
  warn:  'yellow',
  trace: 'magenta',
  dir:   'green'
};

const methods = [ 'log', 'info', 'warn', 'error', 'dir', 'trace' ];

/**!
 * get color function
 */
const colorFn = (method, color) => chalk[color[method]];
const isObject = (obj) => toStr.call(obj) === '[object Object]';

/**!
 * add meta information
 */
const format = (method, msg) => {
  let time = new Date().toISOString();
  return `[${time}]-[${method}]-msg: ${msg}`;
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
