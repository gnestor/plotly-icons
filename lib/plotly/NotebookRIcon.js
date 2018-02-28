'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NotebookRIcon = function NotebookRIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M27.625 32h-21.813c-0.438 0-0.75-0.313-0.75-0.75v-30.5c0-0.438 0.313-0.75 0.75-0.75h21.813c0.438 0 0.75 0.313 0.75 0.75v30.5c0 0.438-0.313 0.75-0.75 0.75zM6.563 30.563h20.375v-29.125h-20.375zM7.25 5.813h-2.875c-0.438 0-0.75-0.313-0.75-0.75s0.313-0.688 0.75-0.688h2.875c0.438 0 0.75 0.25 0.75 0.688s-0.313 0.75-0.75 0.75zM7.25 10.188h-2.875c-0.438 0-0.75-0.313-0.75-0.75s0.313-0.688 0.75-0.688h2.875c0.438 0 0.75 0.25 0.75 0.688s-0.313 0.75-0.75 0.75zM7.25 14.563h-2.875c-0.438 0-0.75-0.313-0.75-0.75s0.313-0.75 0.75-0.75h2.875c0.438 0 0.75 0.313 0.75 0.75s-0.313 0.75-0.75 0.75zM7.25 18.938h-2.875c-0.438 0-0.75-0.313-0.75-0.75s0.313-0.75 0.75-0.75h2.875c0.438 0 0.75 0.313 0.75 0.75s-0.313 0.75-0.75 0.75zM7.25 23.25h-2.875c-0.438 0-0.75-0.25-0.75-0.688s0.313-0.75 0.75-0.75h2.875c0.438 0 0.75 0.313 0.75 0.75s-0.313 0.688-0.75 0.688zM7.25 27.625h-2.875c-0.438 0-0.75-0.25-0.75-0.688s0.313-0.75 0.75-0.75h2.875c0.438 0 0.75 0.313 0.75 0.75s-0.313 0.688-0.75 0.688zM13.25 21.688v-10.75h4.813c1 0 1.75 0.125 2.125 0.25 0.438 0.188 0.875 0.625 1.188 1 0.313 0.438 0.438 1.063 0.438 1.625 0 0.75-0.313 1.438-0.75 1.875-0.438 0.625-1.25 0.875-2.313 1.063 0.438 0.125 0.75 0.25 0.875 0.563 0.438 0.438 0.875 0.875 1.188 1.438l1.875 2.938h-1.75l-1.438-2.188c-0.438-0.563-0.75-1.188-1-1.438-0.313-0.438-0.625-0.625-0.75-0.75s-0.438-0.313-0.563-0.313c-0.188 0-0.438 0-0.75 0h-1.75v4.813h-1.438zM14.688 15.688h3.063c0.563 0 1.188 0 1.625-0.125s0.563-0.313 0.813-0.563c0.188-0.313 0.313-0.625 0.313-1.063 0-0.563-0.125-0.875-0.563-1.313-0.438-0.25-1-0.438-1.75-0.438h-3.5z' })
  );
};
exports.default = NotebookRIcon;