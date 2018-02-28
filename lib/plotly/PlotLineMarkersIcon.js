'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotLineMarkersIcon = function PlotLineMarkersIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M28.313 6.375c-1.5 0-2.75-1.188-2.688-2.75 0-1.5 1.188-2.75 2.75-2.688 1.5 0 2.75 1.188 2.688 2.75 0 1.5-1.188 2.75-2.75 2.688zM28.313 2.563c-0.563 0-1.063 0.5-1.063 1.125 0 0.563 0.5 1.063 1.063 1.063 0.625 0 1.063-0.5 1.063-1.063 0-0.625-0.438-1.125-1.063-1.125zM3.688 31.063c-1.563 0.063-2.75-1.188-2.75-2.688-0.063-1.563 1.188-2.75 2.688-2.75 1.563-0.063 2.75 1.188 2.75 2.688 0.063 1.563-1.188 2.75-2.688 2.75zM3.688 27.25c-0.625 0-1.063 0.5-1.063 1.125 0 0.563 0.438 1.063 1.063 1.063 0.563 0 1.063-0.5 1.063-1.063 0-0.625-0.5-1.125-1.063-1.125zM5.063 27.438l-1.5-0.75 5.063-9.375 3.25 6.125 8.188-17 3.25 6.125 3.625-8 1.563 0.75-5 11.063-3.375-6.25-8.188 17-3.375-6.25z' })
  );
};
exports.default = PlotLineMarkersIcon;