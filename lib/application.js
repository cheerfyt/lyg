"use strict";
const {Server} = require("http");
const exports = module.exports = App;

function App(opts) {
  if(!(this instanceof App)) return new App(opts);
  opts = opts || {};
  this.name = opts.name || "LYG";
}
