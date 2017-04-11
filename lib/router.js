"use strict";
var pathToRegex = require("path-to-regexp");

var keys = [];

var re = pathToRegex("/foo/:bar", keys);

console.log(re.exec("/foo/router"));

console.log("keys =>", keys);