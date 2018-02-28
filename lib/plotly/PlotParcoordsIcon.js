'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotParcoordsIcon = function PlotParcoordsIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M0.875 0.25h0.313c0.5 0.125 0.875 0.5 0.875 1 0 1.625 0 3.25 0 4.938 4.188-1.063 8.438-2.125 12.625-3.188 0-0.563 0-1.188 0-1.75 0-0.5 0.375-0.875 0.813-1h0.375c0.438 0.125 0.875 0.5 0.875 1 0 0.75 0 1.438 0 2.188 4.375 1.688 8.813 3.313 13.188 4.938 0-2.375 0-4.75 0-7.125 0-0.438 0.375-0.875 0.875-1h0.313c0.438 0.125 0.75 0.438 0.875 0.813v29.875c-0.125 0.375-0.375 0.688-0.75 0.813h-0.563c-0.438-0.125-0.75-0.563-0.75-1 0-1 0-2 0-3-2.25-1.813-4.438-3.625-6.688-5.438-2.188 1.813-4.313 3.563-6.5 5.313 0 1.063 0 2.063 0 3.125 0 0.438-0.375 0.875-0.75 1h-0.563c-0.438-0.125-0.75-0.563-0.75-1 0-0.938 0-1.813 0-2.75-4.188-0.813-8.438-1.563-12.625-2.375 0 1.75 0 3.438 0 5.125 0 0.438-0.375 0.875-0.75 1h-0.563c-0.375-0.125-0.688-0.5-0.75-0.875v-29.75c0.063-0.438 0.438-0.75 0.875-0.875M2.063 7.25c0 3.75 0 7.5 0 11.313 4.188-1.063 8.375-2.125 12.625-3.188 0-3.75 0-7.5 0-11.313-4.25 1.063-8.438 2.125-12.625 3.188M16.75 4.563c0 3.75 0 7.438 0 11.125 2.188 1.813 4.313 3.563 6.5 5.313 2.188-1.813 4.375-3.563 6.625-5.375 0 0 0.063-0.063 0.063-0.125 0-2 0-4 0-6-4.375-1.625-8.813-3.313-13.188-4.938M2.063 19.625c0 1.625 0 3.313 0 4.938 4.188 0.813 8.375 1.563 12.625 2.375 0-3.5 0-7 0-10.438-4.25 1-8.438 2.063-12.625 3.125M24.188 21.625c-0.063 0-0.063 0-0.125 0.063 2 1.563 3.938 3.125 5.875 4.75 0-3.188 0-6.375 0-9.5-1.938 1.563-3.875 3.125-5.75 4.688M16.75 17.063c0 3.063 0 6.125 0 9.188 1.875-1.5 3.75-3.063 5.688-4.563-1.875-1.563-3.813-3.125-5.688-4.625z' })
  );
};
exports.default = PlotParcoordsIcon;