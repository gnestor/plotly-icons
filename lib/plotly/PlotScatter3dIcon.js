'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotScatter3dIcon = function PlotScatter3dIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M17.313 5.313h-2.625v8l-14.688 5.375 16 8 16-8-14.688-5.375zM9 20c-0.938 0-1.688-0.75-1.688-1.688 0-0.875 0.75-1.625 1.688-1.625s1.688 0.75 1.688 1.625c0 0.938-0.75 1.688-1.688 1.688zM15.688 24.688c-0.938 0-1.688-0.75-1.688-1.688s0.75-1.688 1.688-1.688c0.875 0 1.625 0.75 1.625 1.688s-0.75 1.688-1.625 1.688zM23.688 17.313c0.875 0 1.625 0.75 1.625 1.688s-0.75 1.688-1.625 1.688c-0.938 0-1.688-0.75-1.688-1.688s0.75-1.688 1.688-1.688zM18.688 16.313c0 0.938-0.75 1.688-1.688 1.688s-1.688-0.75-1.688-1.688c0-0.875 0.75-1.625 1.688-1.625s1.688 0.75 1.688 1.625zM5.313 7c0 0.938-0.75 1.688-1.625 1.688-0.938 0-1.688-0.75-1.688-1.688s0.75-1.688 1.688-1.688c0.875 0 1.625 0.75 1.625 1.688zM12 11.688c0 0.875-0.75 1.625-1.688 1.625-0.875 0-1.625-0.75-1.625-1.625 0-0.938 0.75-1.688 1.625-1.688 0.938 0 1.688 0.75 1.688 1.688zM3.313 13.688c0 0.875-0.75 1.625-1.625 1.625-0.938 0-1.688-0.75-1.688-1.625 0-0.938 0.75-1.688 1.688-1.688 0.875 0 1.625 0.75 1.625 1.688zM30 13.688c0 0.875-0.75 1.625-1.688 1.625-0.875 0-1.625-0.75-1.625-1.625 0-0.938 0.75-1.688 1.625-1.688 0.938 0 1.688 0.75 1.688 1.688zM23.313 9c0 0.938-0.75 1.688-1.625 1.688-0.938 0-1.688-0.75-1.688-1.688s0.75-1.688 1.688-1.688c0.875 0 1.625 0.75 1.625 1.688zM32 7c0 0.938-0.75 1.688-1.688 1.688-0.875 0-1.625-0.75-1.625-1.688s0.75-1.688 1.625-1.688c0.938 0 1.688 0.75 1.688 1.688z' })
  );
};
exports.default = PlotScatter3dIcon;