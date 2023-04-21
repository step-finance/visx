function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import Projection from './Projection';
/**
 * All props pass through to `<Projection projection="orthographic" {...props} />`
 */
export default function Orthographic(props) {
  return /*#__PURE__*/React.createElement(Projection, _extends({
    projection: "orthographic"
  }, props));
}