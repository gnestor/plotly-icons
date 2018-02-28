'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotCarpetIcon = function PlotCarpetIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M9 4.063h22.25c0.375 0.125 0.625 0.563 0.438 0.938-2.5 7.313-5 14.625-7.563 21.938-0.125 0.5-0.563 0.875-1.063 1h-22.25c-0.438-0.063-0.688-0.563-0.5-0.938 2.5-7.313 5.063-14.625 7.563-21.938 0.125-0.5 0.625-0.875 1.125-1M9.375 5.938c-0.375 1.188-0.813 2.438-1.25 3.625 1.25 0 2.438 0 3.688 0 0.438-1.188 0.813-2.438 1.25-3.625-1.25 0-2.438 0-3.688 0M14.875 5.938c-0.375 1.188-0.813 2.438-1.25 3.625 1.25 0 2.438 0.063 3.688 0 0.375-1.188 0.813-2.438 1.25-3.625-1.25 0-2.438 0-3.688 0M20.375 5.938c-0.375 1.188-0.813 2.438-1.25 3.625 1.25 0 2.438 0 3.688 0 0.375-1.188 0.813-2.438 1.25-3.625-1.25 0-2.438 0-3.688 0M25.875 5.938c-0.375 1.188-0.813 2.438-1.25 3.625 1.188 0 2.375 0 3.563 0 0.125 0.063 0.125-0.063 0.188-0.188 0.375-1.125 0.813-2.313 1.188-3.438-1.25 0-2.438 0-3.688 0M7.5 11.438c-0.438 1.188-0.813 2.438-1.25 3.625 1.188 0 2.438 0 3.688 0 0.375-1.188 0.813-2.438 1.25-3.625-1.25 0-2.438 0-3.688 0M11.75 15.063c1.188 0 2.438 0 3.625 0 0.438-1.188 0.875-2.438 1.313-3.625-1.25 0-2.438 0-3.688 0-0.438 1.188-0.813 2.438-1.25 3.625M18.5 11.438c-0.438 1.188-0.813 2.438-1.25 3.625 1.188 0 2.438 0 3.625 0 0.438-1.188 0.875-2.438 1.313-3.625-1.25 0-2.438 0-3.688 0M24 11.438c-0.438 1.188-0.875 2.438-1.25 3.625 1.188 0 2.438 0 3.625 0 0.438-1.188 0.875-2.438 1.313-3.625-1.25 0-2.438 0-3.688 0M4.375 20.563c1.188 0 2.438 0 3.625 0 0.438-1.188 0.875-2.438 1.25-3.625-1.188 0-2.438 0-3.625 0-0.438 1.188-0.875 2.438-1.25 3.625M11.125 16.938c-0.438 1.188-0.875 2.438-1.25 3.625 1.188 0 2.438 0 3.625 0 0.438-1.188 0.875-2.438 1.25-3.625-1.188 0-2.438 0-3.625 0M16.625 16.938c-0.438 1.188-0.875 2.438-1.25 3.625 1.188 0 2.438 0 3.625 0 0.438-1.188 0.875-2.438 1.25-3.625-1.188 0-2.438 0-3.625 0M22.125 16.938c-0.438 1.188-0.875 2.438-1.25 3.625 1.188 0 2.438 0 3.625 0 0.438-1.188 0.875-2.438 1.25-3.625-1.188 0-2.438 0-3.625 0M3.75 22.438c-0.438 1.188-0.875 2.438-1.313 3.625 1.25 0 2.438 0 3.688 0 0.438-1.188 0.813-2.438 1.25-3.625-1.188 0-2.438-0.063-3.625 0M9.188 22.438c-0.375 1.188-0.813 2.438-1.25 3.625 1.25 0 2.438 0 3.688 0 0.438-1.188 0.813-2.438 1.25-3.625-1.188 0-2.438-0.063-3.688 0M14.688 22.438c-0.375 1.188-0.813 2.438-1.25 3.625 1.25 0 2.438 0 3.688 0 0.438-1.188 0.813-2.438 1.25-3.625-1.25 0-2.438-0.063-3.688 0M20.188 22.563c-0.438 1.188-0.813 2.313-1.25 3.5 1.25 0 2.438 0 3.688 0 0.438-1.188 0.875-2.438 1.25-3.625-1.188 0-2.375 0-3.625 0-0.063-0.063-0.063 0.063-0.063 0.125z' })
  );
};
exports.default = PlotCarpetIcon;