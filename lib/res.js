/**!
 * lyg server response
 * CopyRight(c) 2017 YT <tate_fan@163.com>
 */

"use strict";
const http = require("http");
const send = require("send");

const setProto = Object.setPrototypeOf;
const httpProto = http.IncomingMessage.prototype;

const exports = module.exports = res;

/**!
 * inherbit from http.IncomingMessagge
 */
res.__proto__ = httpProto;
