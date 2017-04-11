/**!
 * Lyg server custome error
 * CopyRight(c) 2017 YT <tate_fan@163.com>
 */
"use strict";
const {inherits} = require("util");

const exports = module.exports = LygError;

function LygError(message, extra) {
  this.message = message;
  this.extra = extra;
  this.constructor.name = LygError;
  Error.captureStackTrace(this, Error);
}

inherbits(LygError, Error);