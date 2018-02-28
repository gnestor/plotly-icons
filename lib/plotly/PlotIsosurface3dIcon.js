'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotIsosurface3dIcon = function PlotIsosurface3dIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M30.313 18.375l-2.375-2.188-4.438-11.5 1.063-1.375 4.063 7.563zM17.813 23.563l-10.25-7 3.438-11.563h11.875l4.375 11.25zM24 2.938l-1.063 1.375h-12.125l-3-1.625 7.75-0.938zM6.875 2.938l3.438 1.875-3.375 11.688-5.313 2.875v-7.813zM1.75 20.063l5.438-2.938 10.313 7-0.938 6.125-9.313-2.563zM24.5 27.063l-7.25 3.063 0.875-5.938 9.5-7.375 2.75 2.563z' })
  );
};
exports.default = PlotIsosurface3dIcon;