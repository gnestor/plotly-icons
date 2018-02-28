'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotTimeSeriesIcon = function PlotTimeSeriesIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M1.938 16.188c0.125-0.438 0.25-0.938 0.438-1.438 0.5-1.5 1.063-3 1.75-4.438 1.75-3.875 3.625-6.188 5.375-6.188 1.625 0 3.063 1.625 6 6.25 3.25 5.125 4.75 6.813 7 6.813 2.438 0 4.563-2.563 6.5-6.875 0.625-1.438 1.25-3 1.75-4.563 0.188-0.5 0.313-1 0.5-1.438 0.063-0.313 0.125-0.5 0.125-0.625l-1.125-0.313c-0.063 0.125-0.063 0.313-0.188 0.563-0.125 0.438-0.25 0.938-0.438 1.438-0.5 1.563-1.063 3.063-1.75 4.438-1.75 3.875-3.625 6.188-5.375 6.188-1.625 0-3.063-1.563-6-6.25-3.25-5.125-4.75-6.813-7-6.813-2.438 0-4.563 2.625-6.5 6.875-0.625 1.438-1.25 3-1.75 4.563-0.188 0.563-0.313 1.063-0.5 1.5-0.063 0.25-0.125 0.438-0.125 0.563l1.125 0.313c0.063-0.125 0.063-0.313 0.188-0.563zM0.75 4.313c0.188 0.438 0.313 0.938 0.5 1.438 0.5 1.563 1.125 3.125 1.75 4.563 1.938 4.313 4.063 6.875 6.5 6.875 2.25 0 3.75-1.688 7-6.813 2.938-4.625 4.375-6.25 6-6.25 1.75 0 3.625 2.313 5.375 6.188 0.688 1.438 1.25 2.938 1.75 4.438 0.188 0.5 0.313 1 0.438 1.438 0.125 0.25 0.125 0.438 0.188 0.563l1.125-0.313c0-0.125-0.063-0.313-0.125-0.563-0.188-0.438-0.313-0.938-0.5-1.5-0.5-1.563-1.125-3.125-1.75-4.563-1.938-4.25-4.063-6.875-6.5-6.875-2.25 0-3.75 1.688-7 6.813-2.938 4.688-4.375 6.25-6 6.25-1.75 0-3.625-2.313-5.375-6.188-0.688-1.375-1.25-2.875-1.75-4.438-0.188-0.5-0.313-1-0.438-1.438-0.125-0.25-0.125-0.438-0.188-0.563l-1.125 0.313c0 0.125 0.063 0.313 0.125 0.625zM0 23.688h7.125v5.938h-7.125zM22.5 23.688h9.5v5.938h-9.5zM7.125 23.688h15.375v1.188h-15.375zM7.125 28.438h15.375v1.188h-15.375z' })
  );
};
exports.default = PlotTimeSeriesIcon;