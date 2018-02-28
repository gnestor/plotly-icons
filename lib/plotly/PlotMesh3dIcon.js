'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotMesh3dIcon = function PlotMesh3dIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M16 0l-14.688 8v16l14.688 8 14.688-8v-16zM4 11.313l4 2v4.125l-4-2.25zM23.063 11.063l-4.688-2.375 4.188-2 4.5 2.5zM20.813 12.25l-4.813 2.438-4.813-2.438 4.813-2.375zM8.938 11.063l-4-2 4.5-2.375 4.188 2zM10.688 14.688l4 2v4.5l-4-2.25zM14.688 24.125v4l-4-2.125v-4.125zM17.313 24.125l4-2.25v4.125l-4 2.125zM17.313 21.188v-4.5l4-2v4.25zM24 13.313l4-2v3.875l-4 2.25zM20.25 5.313l-4.25 2.125-4.25-2.125 4.25-2.25zM4 18.25l4 2.313v4.125l-4-2.125zM24 24.688v-4.125l4-2.313v4.125z' })
  );
};
exports.default = PlotMesh3dIcon;