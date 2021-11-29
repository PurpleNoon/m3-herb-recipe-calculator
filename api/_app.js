"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _server = require("/home/runner/work/m3-herb-recipe-calculator/m3-herb-recipe-calculator/node_modules/.modern-js/.runtime-exports/server.js");

var _default = (0, _server.hook)(({
  addMiddleware
}) => {
  addMiddleware(async (req, res, next) => {
    console.info(`access url: ${req.url}`);
    next();
  });
});

exports.default = _default;