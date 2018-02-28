'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ForkIcon = function ForkIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M12 26.313c0-0.5-0.188-0.938-0.5-1.25s-0.75-0.5-1.188-0.5c-0.5 0-0.938 0.188-1.25 0.5s-0.5 0.75-0.5 1.25c0 0.438 0.188 0.875 0.5 1.188s0.75 0.5 1.25 0.5c0.438 0 0.875-0.188 1.188-0.5s0.5-0.75 0.5-1.188zM12 5.688c0-0.438-0.188-0.875-0.5-1.188s-0.75-0.5-1.188-0.5c-0.5 0-0.938 0.188-1.25 0.5s-0.5 0.75-0.5 1.188c0 0.5 0.188 0.938 0.5 1.25s0.75 0.5 1.25 0.5c0.438 0 0.875-0.188 1.188-0.5s0.5-0.75 0.5-1.25zM23.438 8c0-0.5-0.188-0.875-0.5-1.188-0.313-0.375-0.75-0.5-1.25-0.5-0.438 0-0.875 0.125-1.188 0.5-0.313 0.313-0.5 0.688-0.5 1.188s0.188 0.875 0.5 1.188c0.313 0.375 0.75 0.5 1.188 0.5 0.5 0 0.938-0.125 1.25-0.5 0.313-0.313 0.5-0.688 0.5-1.188zM25.125 8c0 0.625-0.125 1.188-0.438 1.75-0.313 0.5-0.75 0.938-1.25 1.188-0.063 3.438-1.375 5.938-4.063 7.438-0.813 0.438-2 0.938-3.625 1.438-1.5 0.438-2.5 0.875-3 1.25s-0.75 1-0.75 1.813v0.438c0.5 0.313 0.938 0.75 1.25 1.25s0.438 1.125 0.438 1.75c0 0.938-0.313 1.75-1 2.375-0.625 0.688-1.438 1-2.375 1-1 0-1.813-0.313-2.438-1-0.688-0.625-1-1.438-1-2.375 0-0.625 0.125-1.25 0.438-1.75s0.75-0.938 1.25-1.25v-14.625c-0.5-0.313-0.938-0.75-1.25-1.25s-0.438-1.125-0.438-1.75c0-0.938 0.313-1.75 1-2.375 0.625-0.688 1.438-1 2.438-1 0.938 0 1.75 0.313 2.375 1 0.688 0.625 1 1.438 1 2.375 0 0.625-0.125 1.25-0.438 1.75s-0.75 0.938-1.25 1.25v8.875c0.625-0.313 1.563-0.688 2.75-1 0.625-0.25 1.188-0.375 1.563-0.563 0.375-0.125 0.813-0.313 1.25-0.563 0.438-0.188 0.813-0.438 1.063-0.688s0.5-0.563 0.75-0.938c0.188-0.313 0.375-0.75 0.5-1.188 0.063-0.5 0.125-1.063 0.125-1.688-0.5-0.25-0.938-0.688-1.25-1.188-0.313-0.563-0.438-1.125-0.438-1.75 0-0.938 0.313-1.75 1-2.438 0.625-0.688 1.438-1 2.375-1 1 0 1.813 0.313 2.438 1 0.688 0.688 1 1.5 1 2.438z' })
  );
};
exports.default = ForkIcon;