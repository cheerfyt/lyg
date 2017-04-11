/**!
 * Lygjs
 * CopyRight(c) 2017 YT <tate_fan@163.com>
 */
"use strict";
const {EventEmitter} = require("events");
const LygError = require("./err");
const http = require("http");
const setProto = Object.setPrototypeof;

const exports = module.exports = initLyg;

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
