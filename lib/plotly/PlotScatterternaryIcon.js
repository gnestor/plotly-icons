'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotScatterternaryIcon = function PlotScatterternaryIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M30.375 28.688h-28.75l14.375-27.5zM3.75 27.313h24.375l-12.125-23.188zM18.688 16c0 0.75-0.625 1.313-1.375 1.313-0.688 0-1.313-0.563-1.313-1.313s0.625-1.313 1.313-1.313c0.75 0 1.375 0.563 1.375 1.313zM21.313 20c0 0.75-0.563 1.313-1.313 1.313s-1.313-0.563-1.313-1.313c0-0.75 0.563-1.313 1.313-1.313s1.313 0.563 1.313 1.313zM9.313 24c0 0.75-0.563 1.313-1.313 1.313s-1.313-0.563-1.313-1.313c0-0.75 0.563-1.313 1.313-1.313s1.313 0.563 1.313 1.313zM17.313 12c0 0.75-0.563 1.313-1.313 1.313s-1.313-0.563-1.313-1.313c0-0.75 0.563-1.313 1.313-1.313s1.313 0.563 1.313 1.313zM13.313 20c0 0.75-0.563 1.313-1.313 1.313s-1.313-0.563-1.313-1.313c0-0.75 0.563-1.313 1.313-1.313s1.313 0.563 1.313 1.313zM13.313 25.313c0 0.75-0.563 1.375-1.313 1.375s-1.313-0.625-1.313-1.375c0-0.688 0.563-1.313 1.313-1.313s1.313 0.625 1.313 1.313zM24 24c0 0.75-0.625 1.313-1.313 1.313-0.75 0-1.375-0.563-1.375-1.313s0.625-1.313 1.375-1.313c0.688 0 1.313 0.563 1.313 1.313z' })
  );
};
exports.default = PlotScatterternaryIcon;