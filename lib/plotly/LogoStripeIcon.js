'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LogoStripeIcon = function LogoStripeIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M3.563 15.313c-0.688-0.25-1.063-0.438-1.063-0.75 0-0.25 0.188-0.375 0.563-0.375 0.75 0 1.438 0.25 1.938 0.5l0.313-1.75c-0.375-0.188-1.188-0.5-2.313-0.5-0.813 0-1.5 0.188-1.938 0.563-0.5 0.438-0.75 1-0.75 1.75 0 1.25 0.75 1.813 2.063 2.25 0.813 0.313 1.063 0.5 1.063 0.875 0 0.313-0.25 0.438-0.75 0.438-0.563 0-1.563-0.25-2.188-0.625l-0.313 1.75c0.563 0.313 1.563 0.625 2.625 0.625 0.875 0 1.563-0.188 2.063-0.563 0.5-0.438 0.75-1.063 0.75-1.813 0-1.313-0.75-1.875-2.063-2.375zM10.563 12.563h-1.5v-2.125l-2 0.313-0.313 1.813-0.688 0.125-0.313 1.625h1v3.375c0 0.938 0.25 1.5 0.688 1.875 0.375 0.313 0.938 0.5 1.75 0.5 0.563 0 0.938-0.125 1.188-0.188v-1.813c-0.125 0-0.438 0.125-0.688 0.125-0.438 0-0.625-0.25-0.625-0.813v-3.063h1.188zM15.188 12.5c-0.125 0-0.313 0-0.438 0-0.625 0-1.188 0.313-1.375 0.938l-0.188-0.875h-2v7.375h2.313v-4.813c0.313-0.375 0.75-0.438 1.313-0.438 0.125 0 0.25 0 0.375 0v-2.188zM16.938 9.375c-0.688 0-1.25 0.563-1.25 1.188 0 0.688 0.563 1.25 1.25 1.25s1.25-0.5 1.25-1.25c0-0.688-0.563-1.188-1.25-1.188zM18.125 19.938v-7.375h-2.375v7.375zM24.813 13.25c-0.438-0.563-1-0.813-1.75-0.813-0.688 0-1.25 0.25-1.813 0.875l-0.125-0.75h-2.063v10.063l2.313-0.375v-2.375c0.375 0.125 0.75 0.188 1.063 0.188 0.563 0 1.438-0.188 2.125-0.875 0.625-0.688 0.938-1.75 0.938-3.188 0-1.188-0.25-2.188-0.688-2.75zM22.813 17.75c-0.188 0.375-0.438 0.563-0.813 0.563-0.188 0-0.438-0.063-0.625-0.125v-3.5c0.438-0.438 0.75-0.5 0.875-0.5 0.625 0 0.938 0.688 0.938 1.938 0 0.688-0.125 1.25-0.375 1.625zM31.438 13.438c-0.5-0.688-1.25-1-2.25-1-2 0-3.188 1.438-3.188 3.813 0 1.313 0.313 2.313 0.938 2.938 0.625 0.563 1.438 0.875 2.563 0.875 1 0 1.875-0.25 2.5-0.625l-0.25-1.625c-0.625 0.313-1.25 0.5-2 0.5-0.5 0-0.813-0.125-1-0.313-0.25-0.188-0.375-0.563-0.438-1h3.875c0-0.125 0-0.625 0-0.813 0-1.188-0.25-2.125-0.75-2.75zM28.313 15.563c0.063-1.063 0.313-1.563 0.875-1.563 0.5 0 0.813 0.5 0.813 1.563z' })
  );
};
exports.default = LogoStripeIcon;