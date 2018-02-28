'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotSankeyIcon = function PlotSankeyIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M1.313 13.375v-0.063h21.375v4l9.313-8-9.313-8v4h-22.688v18.688c4.5 0 8.25 1.625 10.313 4.438l-1.875 0.75 6.25 2.813 2.813-6.25-2.063 0.75c-2.75-4.563-7.938-7.375-14.125-7.75v-0.063c9.938 0.188 15.688 2.25 21.375 7.625l-1.563 1.5 6.875 0.188 0.188-6.875-1.563 1.5c-6.813-6.5-13.813-9.063-25.313-9.25z' })
  );
};
exports.default = PlotSankeyIcon;