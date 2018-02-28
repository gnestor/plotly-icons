'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PanIcon = function PanIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '16', height: '16', viewBox: '0 0 16 16', className: classes }),
    _react2.default.createElement('path', { d: 'M 16,8l-3-3l0,2 l-4,0 l0-4 l 2,0 l-3-3l-3,3l 2,0 l0,4 L 3,7 L 3,4.999 L 0,8l 2.977,3l0-2 L 7,9 l0,4 L 5,13 l 3,3l 3-3l-2,0 l0-4 l 4,0 l0,2.001 L 16,8z' })
  );
};
exports.default = PanIcon;