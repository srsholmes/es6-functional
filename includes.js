'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var includes = (0, _curry2.default)(function (x, arr) {
  return arr.indexOf(x) !== -1;
});
exports.default = includes;