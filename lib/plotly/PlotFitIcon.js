'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotFitIcon = function PlotFitIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M1.313 19.313c0 1.5 1.188 2.688 2.688 2.688s2.688-1.188 2.688-2.688c0-1.438-1.188-2.625-2.688-2.625s-2.688 1.188-2.688 2.625zM9.313 8c0 1.5 1.188 2.688 2.688 2.688s2.688-1.188 2.688-2.688c0-1.5-1.188-2.688-2.688-2.688s-2.688 1.188-2.688 2.688zM25.313 12.688c0 1.438 1.188 2.625 2.688 2.625s2.688-1.188 2.688-2.625c0-1.5-1.188-2.688-2.688-2.688s-2.688 1.188-2.688 2.688zM17.313 24c0 1.5 1.188 2.688 2.688 2.688s2.688-1.188 2.688-2.688c0-1.5-1.188-2.688-2.688-2.688s-2.688 1.188-2.688 2.688zM32 22.688l-32-9.375v-4l32 9.375z' })
  );
};
exports.default = PlotFitIcon;