'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NotebookIpIcon = function NotebookIpIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M27.625 32h-21.813c-0.438 0-0.75-0.313-0.75-0.75v-30.5c0-0.438 0.313-0.75 0.75-0.75h21.813c0.438 0 0.75 0.313 0.75 0.75v30.5c0 0.438-0.313 0.75-0.75 0.75zM6.563 30.563h20.375v-29.125h-20.375zM7.25 5.813h-2.875c-0.438 0-0.75-0.313-0.75-0.75s0.313-0.688 0.75-0.688h2.875c0.438 0 0.75 0.25 0.75 0.688s-0.313 0.75-0.75 0.75zM7.25 10.188h-2.875c-0.438 0-0.75-0.313-0.75-0.75s0.313-0.688 0.75-0.688h2.875c0.438 0 0.75 0.25 0.75 0.688s-0.313 0.75-0.75 0.75zM7.25 14.563h-2.875c-0.438 0-0.75-0.313-0.75-0.75s0.313-0.75 0.75-0.75h2.875c0.438 0 0.75 0.313 0.75 0.75s-0.313 0.75-0.75 0.75zM7.25 18.938h-2.875c-0.438 0-0.75-0.313-0.75-0.75s0.313-0.75 0.75-0.75h2.875c0.438 0 0.75 0.313 0.75 0.75s-0.313 0.75-0.75 0.75zM7.25 23.25h-2.875c-0.438 0-0.75-0.25-0.75-0.688s0.313-0.75 0.75-0.75h2.875c0.438 0 0.75 0.313 0.75 0.75s-0.313 0.688-0.75 0.688zM7.25 27.625h-2.875c-0.438 0-0.75-0.25-0.75-0.688s0.313-0.75 0.75-0.75h2.875c0.438 0 0.75 0.313 0.75 0.75s-0.313 0.688-0.75 0.688zM21.813 10.75c-2-0.125-3.75 0-3.75 0v10.5h1.313v-4.063h2.438c2.063-0.188 2.75-2.063 2.75-3.25 0-1.313-0.688-3-2.75-3.188zM21.5 16.125c-0.563 0-2.125 0-2.125 0v-4.188c0 0 1.25 0 2.125 0 0.625 0 1.625 0.563 1.625 2 0 1.5-1 2.188-1.625 2.188zM16.438 11.625v-0.875h-5.5v0.875h2v8.75h-2v1h5.5v-1h-2.063v-8.75z' })
  );
};
exports.default = NotebookIpIcon;