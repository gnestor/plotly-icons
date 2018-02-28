'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SpikelineIcon = function SpikelineIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M32 6.438c0 3.563-2.875 6.5-6.438 6.5s-6.5-2.938-6.5-6.5c0-3.563 2.938-6.438 6.5-6.438s6.438 2.875 6.438 6.438zM11.563 8.875h5.75v-5.75h-5.75zM0 8.875h5.75v-5.75h-5.75zM23.125 20.5h5.75v-5.813h-5.75zM23.125 32h5.75v-5.75h-5.75z' })
  );
};
exports.default = SpikelineIcon;