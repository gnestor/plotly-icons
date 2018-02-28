'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotTernaryContourIcon = function PlotTernaryContourIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M30.375 28.688l-14.375-27.5-12.375 23.625-2 3.875zM4.688 25.75c0.375-0.313 1.188-0.688 2-0.563 0.375 0 0.625 0.25 0.938 0.563 0.375 0.625 1.188 1.188 2.125 1.563h-6zM18.813 27.313c0 0 0.125 0 0.25-0.125 2.25-1.313 4.813-2.625 7.188-3.563l2 3.688zM11.625 12.813c0.5-0.563 1.813-0.688 3.438-0.688s3.313 0.125 4.563 0.438l3.313 5.438c-1.875 0.125-3.625 0-5.5 0-3.563-0.125-6-2.125-6-4.688-0.125-0.125 0-0.25 0.188-0.5zM17.313 19.313c1.063 0 2.313 0.125 3.375 0.125 0.625 0 1.313 0 2 0-1.5 1.875-4.938 5.5-9.063 4-2.188-0.875-4.188-2-5.875-3.438l2.625-4.938c0.688 2.375 3.375 4.125 6.938 4.25zM19.75 11.313c-1.188-0.125-5.063-0.625-7.5-0.125l3.75-7.063zM7.063 21.063c1.875 1.5 3.875 2.563 6.125 3.5 0.813 0.25 1.625 0.375 2.438 0.375 4.25 0 7.438-3.875 8.625-5.5l1.5 2.813c-2.563 1.063-4.938 2.313-7.375 3.75-3.438 2-8.625 0.563-9.688-1.188-0.438-0.688-1.063-1.063-1.75-1.188-0.375 0-0.813 0-1.188 0z' })
  );
};
exports.default = PlotTernaryContourIcon;