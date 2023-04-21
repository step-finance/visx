function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import BaseBarGroup from './private/BaseBarGroup';
import Bars from './private/Bars';
export default function BarGroup(props) {
  return /*#__PURE__*/React.createElement(BaseBarGroup, _extends({}, props, {
    BarsComponent: Bars
  }));
}