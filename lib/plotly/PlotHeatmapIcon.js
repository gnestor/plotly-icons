'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotHeatmapIcon = function PlotHeatmapIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M0 5.313h5.313v5.375h-5.313zM5.313 21.313v-5.313h-5.313v10.688h10.688v-5.375zM10.688 5.313h5.313v5.375h-5.313zM5.313 10.688h5.375v5.313h-5.375zM16 10.688h5.313v5.313h-5.313zM10.688 16h5.313v5.313h-5.313zM26.688 5.313h-5.375v5.375h5.375v5.313h5.313v-10.688zM21.313 16h5.375v5.313h-5.375zM16 21.313h5.313v5.375h-5.313zM26.688 21.313h5.313v5.375h-5.313z' })
  );
};
exports.default = PlotHeatmapIcon;