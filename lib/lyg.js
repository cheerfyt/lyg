"use strict";

const {EventEmitter} = require("events");
const http = require("http");

const setProto = Object.setPrototype;

const exports = module.exports;

/**!
 * create a Lyg app
 * learn from express
 */
function initLyg() {
  let app = function (req, res, next) {
    app.handle(req, res, next);
  }
  setProto(app, EventEmitter.prototype);
  return app;
}

exports.application = initLyg;