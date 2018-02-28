'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotDonutIcon = function PlotDonutIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M26 5.625l-3.875 4.5c1.5 1.563 2.375 3.625 2.375 5.875 0 0.625-0.063 1.188-0.188 1.813l5.688 1.688c0.25-1.125 0.375-2.313 0.375-3.5 0-4.063-1.688-7.75-4.375-10.375zM12 8.5c1.188-0.625 2.563-1 4-1 1.75 0 3.313 0.5 4.688 1.438l3.813-4.563c-2.375-1.75-5.313-2.75-8.5-2.75-2.625 0-5.063 0.688-7.188 1.875zM23.625 19.625c-1.25 2.625-3.813 4.563-7 4.813v5.938c5.75-0.313 10.625-3.938 12.688-9.063zM14.75 24.438c-4.188-0.563-7.313-4.125-7.313-8.438 0-2.563 1.188-4.875 2.938-6.438l-3.188-5c-3.438 2.688-5.688 6.813-5.688 11.438 0 7.563 5.875 13.75 13.25 14.375z' })
  );
};
exports.default = PlotDonutIcon;