'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LogoVisaIcon = function LogoVisaIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M5.375 11.875c-0.125-0.688-0.563-0.875-1.125-0.875h-4.25v0.188c2.875 0.75 5.25 2.313 6.313 5.25zM6.563 17.875l-0.25-1.438c-0.563-1.438-1.875-2.813-3.375-3.375l2.063 7.938h2.75l4.125-10h-2.813zM13.875 21l1.625-10h-2.625l-1.625 10zM20.938 10.813c-2.563 0-4.375 1.375-4.375 3.313 0 1.438 1.313 2.25 2.25 2.75 1.063 0.5 1.375 0.813 1.375 1.25 0 0.625-0.813 0.938-1.563 0.938-1.063 0-1.625-0.125-2.438-0.5l-0.313-0.188-0.375 2.25c0.563 0.313 1.688 0.563 2.875 0.563 2.688 0 4.5-1.375 4.5-3.438 0-1.125-0.688-2-2.188-2.75-0.875-0.438-1.438-0.75-1.438-1.188s0.5-0.875 1.5-0.875c0.813 0 1.438 0.125 1.938 0.375l0.25 0.125 0.313-2.188c-0.5-0.188-1.313-0.438-2.313-0.438zM27.938 11c-0.625 0-1.125 0.188-1.375 0.875l-3.875 9.125h2.75c0.438-1.188 0.563-1.5 0.563-1.5 0.25 0 2.938 0 3.313 0 0 0 0.063 0.375 0.25 1.5h2.438l-2.063-10zM26.688 17.5c0 0 0.25-0.625 1.063-2.813 0 0 0.188-0.625 0.313-0.938l0.188 0.813c0.5 2.438 0.625 2.938 0.625 2.938-0.438 0-1.688 0-2.188 0z' })
  );
};
exports.default = LogoVisaIcon;