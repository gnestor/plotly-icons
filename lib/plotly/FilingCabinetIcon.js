'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FilingCabinetIcon = function FilingCabinetIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M28 11h-24c-1 0-2 1-2 2v14c0 1 1 2 2 2h24c1 0 2-1 2-2v-14c0-1-1-2-2-2zM21.625 17.625c0 1-1 2-2 2h-7.625c-1 0-2-1-2-2v-0.625c0-1 1-2 2-2h7.625c1 0 2 1 2 2zM30 3h-28c-1 0-2 1-2 2v4h32v-4c0-1-1-2-2-2z' })
  );
};
exports.default = FilingCabinetIcon;