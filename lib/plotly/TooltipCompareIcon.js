'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TooltipCompareIcon = function TooltipCompareIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '17.993999481201172', height: '16', viewBox: '0 0 17.993999481201172 16', className: classes }),
    _react2.default.createElement('path', { d: 'M 2.998,1.019L 2.998,1 L 0.006,4.008L 3,7l0,0l 15,0 L 18,1.019 L 2.998,1.019 z M 2.998,9.007L 2.998,8.992 l-2.992,3.002L 3,15l0,0l 15,0 l0-6 L 2.998,9.007z' })
  );
};
exports.default = TooltipCompareIcon;