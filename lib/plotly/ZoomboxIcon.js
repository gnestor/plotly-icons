'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ZoomboxIcon = function ZoomboxIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '16', height: '16', viewBox: '0 0 16 16', className: classes }),
    _react2.default.createElement('path', { d: 'M 16,14l-4-4.017c 0.641-1.008, 1-2.201, 1-3.483c0-3.589-2.912-6.5-6.5-6.5c-3.589,0-6.5,2.911-6.5,6.5 s 2.923,6.5, 6.512,6.5c 1.287,0, 2.487-0.355, 3.495-1L 14,15.993L 16,14z M 3,10l0-7 l 7,0 l0,7 L 3,10 z M 4,4l 5,0 l0,5 L 4,9 L 4,4 z' })
  );
};
exports.default = ZoomboxIcon;