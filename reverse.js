"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reverse;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function reverse(x) {
  return [].concat(_toConsumableArray(x)).reverse();
}