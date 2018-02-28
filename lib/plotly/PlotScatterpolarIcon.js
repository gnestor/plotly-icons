'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotScatterpolarIcon = function PlotScatterpolarIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = 'plotly-icon';
  if (className) classes += ' ' + className;
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '32', height: '32', viewBox: '0 0 32 32', className: classes }),
    _react2.default.createElement('path', { d: 'M28.438 15.188l-0.563-6.938c1.063-1.063 1.313-2.75 0.625-4.125-0.625-1.375-2.063-2.188-3.625-2.063-1.5 0.125-2.813 1.188-3.188 2.688l-3.438 0.125c-0.938-1.5-2.75-2.188-4.438-1.563-1.688 0.563-2.688 2.313-2.375 4.063l-4.375 1.75c-1.188-1.125-2.938-1.375-4.313-0.625-1.438 0.75-2.188 2.375-1.875 3.938 0.25 1.563 1.563 2.75 3.125 3l2 6.938c-1 0.938-1.313 2.313-0.938 3.625s1.438 2.25 2.75 2.563c1.313 0.25 2.688-0.188 3.563-1.188l5.125 0.875c0.938 1.438 2.688 2.063 4.313 1.5s2.688-2.188 2.438-3.938l3.625-3.438c1.938 0.375 3.875-0.938 4.25-2.875 0.438-1.938-0.75-3.875-2.688-4.313zM25.063 21.438l-2.625 2.5c-0.938-1.188-2.563-1.625-4-1.125-1.5 0.5-2.5 1.813-2.5 3.375l-3.75-0.625c0.188-1.25-0.25-2.438-1.125-3.25-0.938-0.875-2.188-1.188-3.375-0.875l-1.75-6.313c1.688-0.688 2.563-2.563 2.063-4.313l4.25-1.688c1 1.188 2.625 1.625 4.063 1.125 1.5-0.563 2.438-1.938 2.438-3.5l2.875-0.063c0.5 1.875 2.438 3.063 4.375 2.625l0.5 5.875c-1.313 0.375-2.25 1.438-2.563 2.75-0.313 1.25 0.125 2.625 1.125 3.5z' })
  );
};
exports.default = PlotScatterpolarIcon;