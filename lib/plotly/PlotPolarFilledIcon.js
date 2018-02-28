'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotPolarFilledIcon = function PlotPolarFilledIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M19.188 7.375c2.25 0.125 4.5 1.063 6.25 2.563l-6.25 6.313zM20.25 16.938h6.063c-0.125-1.25-0.75-3.125-1.75-4.313zM25.875 23.938c1.375-1.625 2.25-3.438 2.375-5.688h-8zM19.188 29c2.563-0.125 4.938-1.125 6.813-2.813l-6.813-6.813zM17.938 30.438v-11.063l-7.813 7.813c2.188 1.938 4.938 3.063 7.813 3.25zM4.875 18.25c0.188 3.188 1.438 6.313 3.625 8.75l8.625-8.75zM7.625 7.375c-2.375 2.688-3.75 6.375-3.875 9.563h13.375zM17.938 1.625c-3.563 0.188-7.438 1.688-10.25 4.313l10.25 10.313z' })
  );
};
exports.default = PlotPolarFilledIcon;