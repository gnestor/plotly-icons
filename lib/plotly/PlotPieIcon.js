'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotPieIcon = function PlotPieIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M14.438 2.5c-8 0.063-14.438 6.563-14.438 14.5 0 8.063 6.5 14.563 14.5 14.563 3.5 0 6.625-1.188 9.125-3.188l-9.188-10.813zM31.313 15.563c0-0.188 0-0.375 0-0.563 0-8.063-6.5-14.563-14.563-14.563 0 0-0.063 0-0.063 0v15.125zM32 17.75h-14.563l9.125 10.813c3.188-2.563 5.313-6.438 5.438-10.813z' })
  );
};
exports.default = PlotPieIcon;