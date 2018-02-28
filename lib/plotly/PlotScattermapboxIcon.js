'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotScattermapboxIcon = function PlotScattermapboxIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M23.75 19.438c-0.313-0.313-0.813-0.313-1.125 0l-1 1.063-1.313-1.313 2.625-2.625c0.313-0.313 0.313-0.813 0-1.125l-2.625-2.625 1.313-1.313c1 0.688 2.125 1.063 3.313 1.063 0.938 0 1.813-0.188 2.625-0.688 0.25-0.125 0.375-0.313 0.438-0.563 0-0.25-0.063-0.5-0.25-0.688l-2.625-2.625 1.063-1.063c0.313-0.313 0.313-0.813 0-1.125s-0.813-0.313-1.125 0l-1.063 1.063-2.625-2.625c-0.188-0.188-0.438-0.25-0.688-0.25-0.25 0.063-0.438 0.188-0.563 0.438-1.063 1.875-0.875 4.188 0.375 5.938l-1.313 1.313-2.625-2.625c-0.313-0.313-0.813-0.313-1.125 0l-2.625 2.625-1.25-1.313 1-1c0.313-0.313 0.313-0.813 0-1.125l-6.375-6.438c-0.313-0.313-0.813-0.313-1.125 0l-3.25 3.25c-0.313 0.313-0.313 0.813 0 1.125l6.438 6.375c0.125 0.188 0.375 0.25 0.563 0.25s0.375-0.063 0.563-0.25l1-1 1.313 1.25-2.625 2.625c-0.313 0.313-0.313 0.813 0 1.125l2.625 2.625-1.313 1.313c-1.75-1.25-4.063-1.438-5.938-0.375-0.25 0.125-0.375 0.313-0.438 0.563 0 0.25 0.063 0.5 0.25 0.688l2.625 2.625-1.063 1.063c-0.313 0.313-0.313 0.813 0 1.125 0.188 0.125 0.375 0.188 0.563 0.188 0.25 0 0.438-0.063 0.563-0.188l1.063-1.063 2.625 2.625c0.188 0.188 0.375 0.25 0.563 0.25 0.063 0 0.063 0 0.125 0 0.25-0.063 0.438-0.188 0.563-0.438 1.063-1.875 0.875-4.188-0.375-5.938l1.313-1.313 2.625 2.625c0.125 0.188 0.375 0.25 0.563 0.25s0.438-0.063 0.563-0.25l2.625-2.625 1.313 1.313-1.063 1c-0.313 0.313-0.313 0.813 0 1.125l6.375 6.438c0.188 0.125 0.375 0.188 0.563 0.188 0.25 0 0.438-0.063 0.563-0.188l3.25-3.25c0.313-0.313 0.313-0.813 0-1.125zM21.125 6.25l4.625 4.625c-1.25 0.313-2.625-0.063-3.563-1.063-1-0.938-1.375-2.313-1.063-3.563zM3.563 5.625l2.063-2.063 2.063 2.063-2.063 2.063zM8.813 10.875l-2.063-2.063 2.063-2.063 2.063 2.063zM10.875 25.75l-4.625-4.625c1.25-0.313 2.625 0.063 3.563 1.063 1 0.938 1.375 2.313 1.063 3.563zM16 21.25l-5.25-5.25 5.25-5.25 5.25 5.25zM21.125 23.188l2.063-2.063 2.063 2.063-2.063 2.063zM26.375 28.438l-2.063-2.063 2.063-2.063 2.125 2.063z' })
  );
};
exports.default = PlotScattermapboxIcon;