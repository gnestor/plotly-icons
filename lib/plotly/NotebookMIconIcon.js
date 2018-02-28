'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NotebookMIconIcon = function NotebookMIconIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M27.625 32h-21.813c-0.438 0-0.75-0.313-0.75-0.75v-30.5c0-0.438 0.313-0.75 0.75-0.75h21.813c0.438 0 0.75 0.313 0.75 0.75v30.5c0 0.438-0.313 0.75-0.75 0.75zM6.563 30.563h20.375v-29.125h-20.375zM7.25 5.813h-2.875c-0.438 0-0.75-0.313-0.75-0.75s0.313-0.688 0.75-0.688h2.875c0.438 0 0.75 0.25 0.75 0.688s-0.313 0.75-0.75 0.75zM7.25 10.188h-2.875c-0.438 0-0.75-0.313-0.75-0.75s0.313-0.688 0.75-0.688h2.875c0.438 0 0.75 0.25 0.75 0.688s-0.313 0.75-0.75 0.75zM7.25 14.563h-2.875c-0.438 0-0.75-0.313-0.75-0.75s0.313-0.75 0.75-0.75h2.875c0.438 0 0.75 0.313 0.75 0.75s-0.313 0.75-0.75 0.75zM7.25 18.938h-2.875c-0.438 0-0.75-0.313-0.75-0.75s0.313-0.75 0.75-0.75h2.875c0.438 0 0.75 0.313 0.75 0.75s-0.313 0.75-0.75 0.75zM7.25 23.25h-2.875c-0.438 0-0.75-0.25-0.75-0.688s0.313-0.75 0.75-0.75h2.875c0.438 0 0.75 0.313 0.75 0.75s-0.313 0.688-0.75 0.688zM7.25 27.625h-2.875c-0.438 0-0.75-0.25-0.75-0.688s0.313-0.75 0.75-0.75h2.875c0.438 0 0.75 0.313 0.75 0.75s-0.313 0.688-0.75 0.688zM13.063 21.5v-11h2.188l2.625 7.813c0.313 0.75 0.438 1.313 0.625 1.625 0.125-0.438 0.25-1 0.563-1.75l2.625-7.688h1.875v11h-1.438v-9.313l-3.188 9.188h-1.188l-3.188-9.313v9.438zM9.438 19.5h2.063v2h-2.063z' })
  );
};
exports.default = NotebookMIconIcon;