'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotHistogramIcon = function PlotHistogramIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '24', height: '16', viewBox: '0 0 24 16', className: classes }),
    _react2.default.createElement('path', { d: 'M0,11.015L 4.003,11.015L 4.003,16L0,16zM 5,5.015L 9.003,5.015L 9.003,16L 5,16zM 10,0L 14.011,0L 14.011,16L 10,16zM 15,5.014L 19.004,5.014L 19.004,16L 15,16zM 19.996,11.015L 24,11.015L 24,16L 19.996,16z' })
  );
};
exports.default = PlotHistogramIcon;