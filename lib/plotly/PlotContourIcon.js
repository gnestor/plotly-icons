'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotContourIcon = function PlotContourIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M11.188 4c4.938 0 10.688 1.625 13.063 3.75 2.938 2.5 4.813 6 5.063 9.875 0.313 2.375-0.625 4.75-2.25 6.625-3.188 2.813-7.313 4.313-11.625 4.313-2.875 0.125-5.688-0.938-7.813-2.938-5.75-5.75-6.688-16.313-3.25-19.75 1.25-1.188 3.625-1.875 6.813-1.875M11.188 2.688c-3.188 0-6.125 0.625-7.75 2.25-4.125 4-2.75 15.438 3.25 21.438 2.375 2.313 5.563 3.5 8.75 3.375 4.563 0 9.125-1.625 12.563-4.688 4.125-4.125 3.75-12.938-2.813-18.5-2.625-2.313-8.813-3.875-14-3.875zM12.938 9.063c3.875 0 7.188 1.063 8.125 2 1.625 1.5 2.375 3.5 2.375 5.625 0.188 1.875-0.5 3.688-1.813 5.063-1.25 1.063-2.813 1.688-4.563 1.563-2.25 0-4.375-0.938-6-2.5-3.75-3.75-5.438-8.688-3.625-10.563 0.813-0.5 2.438-1.188 5.5-1.188M12.938 7.75c-2.688 0-5.063 0.5-6.25 1.563-2.688 2.688-0.438 8.563 3.563 12.438 1.875 1.875 4.313 2.938 6.938 2.938 2 0 4-0.688 5.5-2.125 3.188-3.75 2.938-9.25-0.688-12.688-1.438-1.188-5.438-2.125-9.063-2.125zM14.938 12.375c0.5 0 1.063 0.313 1.438 0.563 1.875 1.875 2.813 4.5 2.563 4.938-0.375 0.688-1.063 1.063-1.75 1.063-1.063-0.125-2.125-0.688-2.938-1.313-2.25-1.875-2.375-3.063-2.25-3.875 0-0.125 0.125-0.313 0.125-0.313 0.688-0.625 1.75-1.063 2.813-1.063M14.938 11.063c-1.875 0-4 1.063-4.25 2.125-0.688 2 0.625 3.75 2.625 5.375 1.063 0.875 2.438 1.438 3.875 1.563 1.188 0 2.25-0.5 2.813-1.438 0.938-1.5-0.813-4.813-2.688-6.688-0.625-0.563-1.438-1.063-2.375-0.938' })
  );
};
exports.default = PlotContourIcon;