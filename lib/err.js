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