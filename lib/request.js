/**!
 * Lyg.request
 * CopyRight(c) 2017 YT <tate_fan@163.com>
 */
"use strict";
const accept = require("accepts");
const LygError = require("./err");
const http = require("http");

const httpProto = http.IncomingMessage.prototype;
setProto = Object.setPrototypeOf;

const exports = module.exports = req;

/**!
 * inherits from http.IncomingMessage
 */
setProto(req, httpProto);

req.get = req.header = function header(name) {
  if (!name) 
    throw new LygError("name is required");
  if (typeof name !== "string") 
    throw new LygError("name must be string");
  
  let lw = name.toLowerCase();

  if (lw === "referer" || lw === "referrer") {
    return this.header["referer"] || this.header["referrer"];
  }
  return this.header[name];
};