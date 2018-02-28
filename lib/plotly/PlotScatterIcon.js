'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotScatterIcon = function PlotScatterIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M0 8c0 1.5 1.188 2.688 2.688 2.688 1.438 0 2.625-1.188 2.625-2.688s-1.188-2.688-2.625-2.688c-1.5 0-2.688 1.188-2.688 2.688zM10.688 16c0 1.5 1.188 2.688 2.625 2.688 1.5 0 2.688-1.188 2.688-2.688s-1.188-2.688-2.688-2.688c-1.438 0-2.625 1.188-2.625 2.688zM16 9.313c0 1.5 1.188 2.688 2.688 2.688 1.438 0 2.625-1.188 2.625-2.688 0-1.438-1.188-2.625-2.625-2.625-1.5 0-2.688 1.188-2.688 2.625zM5.313 24c0 1.5 1.188 2.688 2.688 2.688s2.688-1.188 2.688-2.688c0-1.5-1.188-2.688-2.688-2.688s-2.688 1.188-2.688 2.688zM21.313 20c0 1.5 1.188 2.688 2.688 2.688s2.688-1.188 2.688-2.688c0-1.5-1.188-2.688-2.688-2.688s-2.688 1.188-2.688 2.688zM26.688 12c0 1.5 1.188 2.688 2.625 2.688 1.5 0 2.688-1.188 2.688-2.688s-1.188-2.688-2.688-2.688c-1.438 0-2.625 1.188-2.625 2.688z' })
  );
};
exports.default = PlotScatterIcon;