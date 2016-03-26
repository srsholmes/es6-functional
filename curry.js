"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.curry = curry;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function curry(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var c = function c(args) {
    return args.length < fn.length ? function () {
      for (var _len2 = arguments.length, _args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        _args[_key2] = arguments[_key2];
      }

      return c([].concat(_toConsumableArray(args), _args));
    } : fn.apply(undefined, _toConsumableArray(args));
  };
  return c(args);
};

exports.default = curry;