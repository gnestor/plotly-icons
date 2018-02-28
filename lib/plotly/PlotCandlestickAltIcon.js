'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotCandlestickAltIcon = function PlotCandlestickAltIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M8.688 0h1.313v32h-1.313zM15.313 0h1.375v32h-1.375zM15.313 5.313h1.375c0.75 0 1.313 0.563 1.313 1.375v6.625c0 0.813-0.563 1.375-1.313 1.375h-1.375c-0.75 0-1.313-0.563-1.313-1.375v-6.625c0-0.813 0.563-1.375 1.313-1.375zM8.688 20h1.313c0.813 0 1.313 0.563 1.313 1.313v6.688c0 0.813-0.5 1.313-1.313 1.313h-1.313c-0.813 0-1.375-0.5-1.375-1.313v-6.688c0-0.75 0.563-1.313 1.375-1.313zM2 0h1.313v32h-1.313zM2 10.688h1.313c0.813 0 1.375 0.5 1.375 1.313v6.688c0 0.75-0.563 1.313-1.375 1.313h-1.313c-0.813 0-1.313-0.563-1.313-1.313v-6.688c0-0.813 0.5-1.313 1.313-1.313zM22 0h1.313v32h-1.313zM22 14.688h1.313c0.813 0 1.375 0.5 1.375 1.313v6.688c0 0.75-0.563 1.313-1.375 1.313h-1.313c-0.813 0-1.313-0.563-1.313-1.313v-6.688c0-0.813 0.5-1.313 1.313-1.313zM28.688 0h1.313v32h-1.313zM28.688 2.688h1.313c0.813 0 1.313 0.5 1.313 1.313v6.688c0 0.75-0.5 1.313-1.313 1.313h-1.313c-0.813 0-1.375-0.563-1.375-1.313v-6.688c0-0.813 0.563-1.313 1.375-1.313z' })
  );
};
exports.default = PlotCandlestickAltIcon;