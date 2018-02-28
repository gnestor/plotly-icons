'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotScatterAxesIcon = function PlotScatterAxesIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M29.375 28.375h-24.313c-0.75 0-1.438-0.625-1.438-1.375v-24.375c0-0.563-0.438-1-1-1s-1 0.438-1 1v24.375c0 1.875 1.5 3.375 3.438 3.375h24.375c0.563 0 1-0.438 1-1s-0.5-1-1.063-1zM10.938 22.063c0 1-0.813 1.75-1.75 1.75s-1.75-0.75-1.75-1.75c0-0.938 0.813-1.688 1.75-1.688s1.75 0.75 1.75 1.688zM17.25 12.813c0 1-0.75 1.75-1.75 1.75-0.938 0-1.688-0.75-1.688-1.75 0-0.938 0.75-1.688 1.688-1.688 1 0 1.75 0.75 1.75 1.688zM19.438 19.625c0 1-0.75 1.75-1.688 1.75-1 0-1.75-0.75-1.75-1.75 0-0.938 0.75-1.688 1.75-1.688 0.938 0 1.688 0.75 1.688 1.688zM24.313 14.063c0 0.938-0.75 1.688-1.75 1.688-0.938 0-1.688-0.75-1.688-1.688s0.75-1.75 1.688-1.75c1 0 1.75 0.813 1.75 1.75zM27 7.5c0 0.938-0.813 1.688-1.75 1.688s-1.75-0.75-1.75-1.688c0-0.938 0.813-1.75 1.75-1.75s1.75 0.813 1.75 1.75z' })
  );
};
exports.default = PlotScatterAxesIcon;