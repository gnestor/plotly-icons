'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ScriptIcon = function ScriptIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '16', height: '16', viewBox: '0 0 16 16', className: classes }),
    _react2.default.createElement('path', { d: 'M 0,7c 0.617,0, 1.197-0.123, 1.5-0.5c 0.303-0.377, 0.5-1.051, 0.5-2l0-1.5 C 2,1.922, 2.407,1.248, 2.899,0.745 C 3.392,0.242, 4.186,0, 5.281,0L 6,0 l0,2 L 5.932,2.002c-0.751,0-1.208,0.097-1.373,0.289S 4.313,3.020, 4.313,3.902 c0,1.127-0.083,1.98-0.25,2.558C 3.896,7.037, 3.64,7.548, 3,8c 0.64,0.447, 0.896,0.965, 1.063,1.543 c 0.167,0.578, 0.25,1.432, 0.25,2.561c0,0.884, 0.082,1.421, 0.246,1.614c 0.164,0.192, 0.622,0.289, 1.373,0.289L 6,14l0,2 L 5.281,16 c-1.096,0-1.89-0.233-2.382-0.736S 2,14.078, 2,13l0-1.5 c0-0.955-0.197-1.626-0.5-2C 1.197,9.126, 0.617,9.006, 0,9L 0,7 zM 16,9c-0.617,0.006-1.199,0.126-1.5,0.5c-0.3,0.374-0.5,1.045-0.5,2l0,1.5 c0,1.078-0.312,1.761-0.805,2.264 s-1.289,0.736-2.391,0.736L 10,16 l0-2 l 0.154,0.007c 0.756,0, 1.217-0.097, 1.381-0.289c 0.164-0.193, 0.246-0.73, 0.246-1.614 c0-1.129, 0.083-1.982, 0.25-2.561S 12.366,8.447, 13,8c-0.634-0.452-0.802-0.963-0.969-1.541s-0.25-1.43-0.25-2.558 c0-0.882-0.082-1.419-0.246-1.611S 10.91,2.002, 10.154,2.002L 10,2l0-2 l 0.805,0 c 1.102,0, 1.898,0.242, 2.391,0.745 C 13.688,1.248, 14,1.922, 14,3l0,1.5 c0,0.949, 0.2,1.623, 0.5,2c 0.301,0.377, 0.883,0.5, 1.5,0.5L 16,9 z' })
  );
};
exports.default = ScriptIcon;