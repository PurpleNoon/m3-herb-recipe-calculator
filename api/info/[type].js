"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = exports.default = void 0;

var _default = async (type, {
  query
}) => {
  const {
    username
  } = query;
  return {
    type,
    username,
    message: `Hello Modern.js`
  };
};

exports.default = _default;

const post = async (type, {
  query,
  data
}) => {
  const {
    username
  } = query;
  const {
    message
  } = data;
  return Promise.resolve({
    type,
    username,
    message: `Hello Modern.js. Your message: ${message}`
  });
};

exports.post = post;