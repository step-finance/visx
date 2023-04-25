import _pt from "prop-types";
var _excluded = ["flex", "label", "margin", "align", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
export default function LegendLabel(_ref) {
  var _ref$flex = _ref.flex,
    flex = _ref$flex === void 0 ? '1' : _ref$flex,
    label = _ref.label,
    _ref$margin = _ref.margin,
    margin = _ref$margin === void 0 ? '5px 0' : _ref$margin,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? 'left' : _ref$align,
    children = _ref.children,
    restProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "visx-legend-label",
    style: {
      justifyContent: align,
      display: 'flex',
      flex: flex,
      margin: margin
    }
  }, restProps), children || label);
}
LegendLabel.propTypes = {
  align: _pt.string,
  label: _pt.node,
  flex: _pt.oneOfType([_pt.string, _pt.number]),
  margin: _pt.oneOfType([_pt.string, _pt.number]),
  children: _pt.node
};