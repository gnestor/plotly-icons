'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotViolinIcon = function PlotViolinIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M7.313 12.063c-0.688-0.688-1.25-1.25-1.25-2.375v-3.875c0-0.375-0.25-0.688-0.625-0.688s-0.625 0.313-0.625 0.688v3.875c0 1.125-0.625 1.688-1.375 2.375-0.813 0.75-1.813 1.688-1.813 3.688 0 2.188 1 3.188 1.875 3.938 0.688 0.688 1.313 1.188 1.313 2.438v3.813c0 0.375 0.25 0.688 0.625 0.688s0.625-0.313 0.625-0.688v-3.813c0-1.25 0.563-1.75 1.25-2.438 0.875-0.813 1.813-1.813 1.813-3.938 0-2-1-2.938-1.813-3.688zM5.188 17.563c-0.875 0-1.563-0.688-1.563-1.5 0-0.875 0.75-1.563 1.563-1.563s1.563 0.688 1.563 1.563c0 0.813-0.688 1.5-1.563 1.5zM17.875 17.938c-0.75-0.688-1.25-1.063-1.25-1.875v-3.25c0-0.375-0.25-0.688-0.625-0.688s-0.625 0.313-0.625 0.688v3.25c0 0.813-0.438 1.188-1.25 1.875-0.875 0.625-1.875 1.5-1.875 3.188 0 1.938 1 2.75 1.875 3.438 0.688 0.563 1.188 1 1.188 1.938v3.188c0 0.375 0.25 0.688 0.625 0.688 0.438 0 0.688-0.313 0.688-0.688v-3.188c0-0.938 0.5-1.375 1.25-1.938 0.813-0.688 1.875-1.5 1.875-3.438 0-1.75-1-2.563-1.875-3.188zM16.188 22.75c-0.875 0-1.563-0.688-1.563-1.563 0-0.813 0.75-1.5 1.563-1.5 0.875 0 1.563 0.688 1.563 1.5 0 0.875-0.688 1.563-1.563 1.563zM28.563 9.688c-0.75-0.813-1.375-1.438-1.375-2.813v-4.563c0-0.375-0.25-0.688-0.625-0.688s-0.625 0.313-0.625 0.688v4.563c0 1.375-0.563 2-1.313 2.813-0.813 0.938-1.75 1.938-1.75 4.188 0 2.438 0.938 3.563 1.813 4.438 0.75 0.813 1.25 1.438 1.25 2.938v4.5c0 0.375 0.25 0.688 0.625 0.688 0.438 0 0.688-0.313 0.688-0.688v-4.5c0-1.5 0.625-2.125 1.375-2.938 0.813-0.938 1.75-2 1.75-4.438 0-2.25-0.938-3.313-1.813-4.188zM26.875 15.5c-0.875 0-1.563-0.688-1.563-1.5 0-0.875 0.688-1.563 1.563-1.563 0.813 0 1.5 0.688 1.5 1.563 0 0.813-0.688 1.5-1.5 1.5z' })
  );
};
exports.default = PlotViolinIcon;