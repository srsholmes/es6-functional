'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filter = (0, _curry2.default)(function (fn, x) {
  return x.filter(function (i) {
    return fn(i);
  });
});
exports.default = filter;