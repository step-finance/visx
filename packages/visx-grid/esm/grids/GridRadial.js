import _pt from "prop-types";
var _excluded = ["arcThickness", "className", "endAngle", "fill", "fillOpacity", "left", "lineClassName", "lineStyle", "numTicks", "scale", "startAngle", "stroke", "strokeWidth", "strokeDasharray", "tickValues", "top"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import cx from 'classnames';
import Arc from '@visx/shape/lib/shapes/Arc';
import { Group } from '@visx/group';
import { getTicks } from '@visx/scale';
export default function GridRadial(_ref) {
  var arcThickness = _ref.arcThickness,
    className = _ref.className,
    _ref$endAngle = _ref.endAngle,
    endAngle = _ref$endAngle === void 0 ? 2 * Math.PI : _ref$endAngle,
    _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? 'transparent' : _ref$fill,
    _ref$fillOpacity = _ref.fillOpacity,
    fillOpacity = _ref$fillOpacity === void 0 ? 1 : _ref$fillOpacity,
    _ref$left = _ref.left,
    left = _ref$left === void 0 ? 0 : _ref$left,
    lineClassName = _ref.lineClassName,
    lineStyle = _ref.lineStyle,
    _ref$numTicks = _ref.numTicks,
    numTicks = _ref$numTicks === void 0 ? 10 : _ref$numTicks,
    scale = _ref.scale,
    _ref$startAngle = _ref.startAngle,
    startAngle = _ref$startAngle === void 0 ? 0 : _ref$startAngle,
    _ref$stroke = _ref.stroke,
    stroke = _ref$stroke === void 0 ? '#eaf0f6' : _ref$stroke,
    _ref$strokeWidth = _ref.strokeWidth,
    strokeWidth = _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth,
    strokeDasharray = _ref.strokeDasharray,
    tickValues = _ref.tickValues,
    _ref$top = _ref.top,
    top = _ref$top === void 0 ? 0 : _ref$top,
    restProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  var radii = tickValues != null ? tickValues : getTicks(scale, numTicks);
  var innerRadius = Math.min.apply(Math, scale.domain());
  return /*#__PURE__*/React.createElement(Group, {
    className: cx('visx-grid-radial', className),
    top: top,
    left: left
  }, radii.map(function (radius, i) {
    return /*#__PURE__*/React.createElement(Arc, _extends({
      key: "radial-grid-" + radius + "-" + i,
      className: lineClassName,
      startAngle: startAngle,
      endAngle: endAngle,
      innerRadius: scale(arcThickness ? radius - arcThickness : innerRadius),
      outerRadius: scale(radius),
      fill: fill,
      fillOpacity: fillOpacity,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      style: lineStyle
    }, restProps));
  }));
}
GridRadial.propTypes = {
  tickValues: _pt.array,
  arcThickness: _pt.number,
  endAngle: _pt.number,
  lineClassName: _pt.string,
  fill: _pt.string,
  fillOpacity: _pt.number,
  startAngle: _pt.number,
  children: _pt.func
};