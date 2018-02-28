'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotRadarIcon = function PlotRadarIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M24.5 4.438l-0.063-0.063c0 0-0.063 0-0.063 0-2.375-1.75-5.25-2.75-8.375-2.75s-6 1-8.375 2.75c-0.063 0-0.063 0-0.063 0s0 0-0.063 0.063c-3.563 2.625-5.875 6.813-5.875 11.563 0 1.563 0.25 3 0.688 4.438v0c0 0 0.063 0 0.063 0.063 1.875 5.75 7.25 9.875 13.625 9.875 6.313 0 11.688-4.125 13.625-9.813 0 0 0-0.063 0-0.063 0.5-1.438 0.75-2.938 0.75-4.5 0-4.75-2.313-8.938-5.875-11.563zM16 4.25c2.125 0 4.063 0.563 5.813 1.5l-2.125 2.875c-1.063-0.563-2.375-0.875-3.688-0.875-1.375 0-2.625 0.313-3.75 0.875l-2.063-2.875c1.75-0.938 3.688-1.5 5.813-1.5zM18.125 15.313l2.125-3c0.875 1 1.438 2.25 1.438 3.688 0 0.188-0.063 0.313-0.063 0.438zM20.813 18.938c-0.813 1.25-2 2.188-3.5 2.563v-3.688zM13.875 15.313l-3.5 1.125c0-0.125-0.063-0.25-0.063-0.438 0-1.438 0.563-2.688 1.375-3.688zM4.25 16c0-3.25 1.313-6.188 3.438-8.313 0.125-0.125 0.25-0.25 0.375-0.375l2.063 2.813c-1.5 1.5-2.375 3.625-2.375 5.875 0 0.438 0.063 0.875 0.125 1.25l-3.375 1.125c-0.188-0.75-0.25-1.563-0.25-2.375zM14.688 27.688c-2.75-0.313-5.188-1.563-7-3.375-1-1-1.813-2.188-2.375-3.438l3.375-1.125c1.125 2.313 3.375 3.938 6 4.375v3.563zM14.688 21.5c-1.5-0.375-2.75-1.313-3.5-2.563l3.5-1.125zM13.813 10.75c0.688-0.25 1.375-0.438 2.188-0.438 0.75 0 1.5 0.188 2.188 0.438l-2.188 3zM24.313 24.313c-1.875 1.813-4.313 3.063-7 3.375v-3.563c2.625-0.438 4.813-2.063 6-4.375l3.375 1.125c-0.563 1.25-1.375 2.438-2.375 3.438zM27.5 18.375l-3.375-1.125c0.063-0.375 0.125-0.813 0.125-1.25 0-2.25-0.875-4.375-2.375-5.875l2-2.813c0.188 0.125 0.313 0.25 0.438 0.375 2.125 2.125 3.438 5.063 3.438 8.313 0 0.813-0.063 1.625-0.25 2.375z' })
  );
};
exports.default = PlotRadarIcon;