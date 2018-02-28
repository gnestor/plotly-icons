'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ZoomPlusIcon = function ZoomPlusIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '16', height: '16', viewBox: '0 0 16 16', className: classes }),
    _react2.default.createElement('path', { d: 'M 0.013,1.012l0,13.988 l 13.999,0 L 14.012,1.012 L 0.013,1.012 z M 11.012,9.007l-2.999,0 l0,2.999 l-2,0 L 6.013,9.007 l-3,0 L 3.013,7.008 l 3,0 L 6.013,4.010 l 2,0 l0,2.998 l 2.999,0 L 11.012,9.007 z' })
  );
};
exports.default = ZoomPlusIcon;