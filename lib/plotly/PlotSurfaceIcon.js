'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotSurfaceIcon = function PlotSurfaceIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M23.375 15.75c-1.813-0.563-2.813-3-2.813-3-0.063-0.25-0.563-1.313-0.563-1.563-0.063-0.188-0.563-1.688-0.688-2.125l-0.375-0.813c-0.25-0.5-0.688-1.375-1.25-2.063l-0.313-0.313-0.25-0.188c-0.375-0.25-0.688-0.375-1.063-0.375s-1.063 0.188-1.563 0.688l-0.5 0.688c-0.063 0.125-0.188 0.313-0.313 0.5-0.125 0.25-0.313 0.563-0.438 0.875l0.125-0.25c-0.188 0.375-0.375 0.75-0.375 0.75s-0.438 1.063-0.563 1.563c0 0-0.25 0.75-0.313 1.125 0-0.125 0.063-0.313 0.063-0.438l-0.313 1.063c-0.25 0.438-0.5 1.125-0.5 1.125-0.5 0.688-0.875 2-3.188 2.875l-2.938 1-5.25 1.813 16 8 16-8zM12.063 11.438c0 0.063-0.063 0.125-0.125 0.188 0.063-0.063 0.063-0.125 0.125-0.188z' })
  );
};
exports.default = PlotSurfaceIcon;