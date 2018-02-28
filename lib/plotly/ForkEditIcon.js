'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ForkEditIcon = function ForkEditIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M22 6c-2.188 0-4 1.813-4 4 0 1.5 0.813 2.75 2 3.438v0.563c0 2-2 4-4 4-1.625 0-2.938 0.375-4 0.938v-9.5c1.188-0.688 2-1.938 2-3.438 0-2.188-1.75-4-4-4-2.188 0-4 1.813-4 4 0 1.5 0.813 2.75 2 3.438v13.125c-1.188 0.688-2 1.938-2 3.438 0 2.188 1.813 4 4 4 2.25 0 4-1.813 4-4 0-1.063-0.375-2-1.063-2.75 0.625-0.688 1.563-1.25 3.063-1.25 4 0 8-4 8-8v-0.563c1.188-0.688 2-2 2-3.438 0-2.25-1.75-4-4-4zM10 4c1.125 0 2 0.938 2 2 0 1.125-0.875 2-2 2-1.063 0-2-0.875-2-2 0-1.063 0.938-2 2-2zM10 28c-1.063 0-2-0.875-2-2 0-1.063 0.938-2 2-2 1.125 0 2 0.938 2 2 0 1.125-0.875 2-2 2zM22 12c-1.063 0-2-0.875-2-2 0-1.063 0.938-2 2-2 1.125 0 2 0.938 2 2 0 1.125-0.875 2-2 2z' })
  );
};
exports.default = ForkEditIcon;