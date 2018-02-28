'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotTube3dIcon = function PlotTube3dIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M1.313 32h4c0.75 0 1.375-0.625 1.375-1.313v-10.688c0-0.75-0.625-1.313-1.375-1.313h-4c-0.688 0-1.313 0.563-1.313 1.313v10.688c0 0.688 0.625 1.313 1.313 1.313zM2.688 29.313v-8h1.313v8zM20 6.688h10.688c0.688 0 1.313-0.625 1.313-1.375v-4c0-0.688-0.625-1.313-1.313-1.313h-10.688c-0.75 0-1.313 0.625-1.313 1.313v4c0 0.75 0.563 1.375 1.313 1.375zM21.313 2.688h8v1.313h-8zM20 5.313v9c0 3.75-1.938 5.688-5.5 5.688h-9.188c-0.688 0-1.313 0.625-1.313 1.313v8c0 0.75 0.625 1.375 1.313 1.375h9.188c8.75 0 16.188-7.563 16.188-16.375v-9c0-0.688-0.625-1.313-1.375-1.313h-8c-0.688 0-1.313 0.625-1.313 1.313zM22.688 6.688h5.313v7.625c0 7.375-6.188 13.688-13.5 13.688h-7.813v-5.313h7.813c5 0 8.188-3.125 8.188-8.375z' })
  );
};
exports.default = PlotTube3dIcon;