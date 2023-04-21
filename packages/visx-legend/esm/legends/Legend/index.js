import _pt from "prop-types";
var _excluded = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import cx from 'classnames';
import LegendItem from './LegendItem';
import LegendLabel from './LegendLabel';
import LegendShape from './LegendShape';
import valueOrIdentity, { valueOrIdentityString } from '../../util/valueOrIdentity';
import labelTransformFactory from '../../util/labelTransformFactory';
var defaultStyle = {
  display: 'flex'
};
export default function Legend(_ref) {
  var className = _ref.className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? defaultStyle : _ref$style,
    scale = _ref.scale,
    shape = _ref.shape,
    inputDomain = _ref.domain,
    _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? valueOrIdentityString : _ref$fill,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? valueOrIdentityString : _ref$size,
    _ref$labelFormat = _ref.labelFormat,
    labelFormat = _ref$labelFormat === void 0 ? valueOrIdentity : _ref$labelFormat,
    _ref$labelTransform = _ref.labelTransform,
    labelTransform = _ref$labelTransform === void 0 ? labelTransformFactory : _ref$labelTransform,
    _ref$shapeWidth = _ref.shapeWidth,
    shapeWidth = _ref$shapeWidth === void 0 ? 15 : _ref$shapeWidth,
    _ref$shapeHeight = _ref.shapeHeight,
    shapeHeight = _ref$shapeHeight === void 0 ? 15 : _ref$shapeHeight,
    _ref$shapeMargin = _ref.shapeMargin,
    shapeMargin = _ref$shapeMargin === void 0 ? '2px 4px 2px 0' : _ref$shapeMargin,
    shapeStyle = _ref.shapeStyle,
    _ref$labelAlign = _ref.labelAlign,
    labelAlign = _ref$labelAlign === void 0 ? 'left' : _ref$labelAlign,
    _ref$labelFlex = _ref.labelFlex,
    labelFlex = _ref$labelFlex === void 0 ? '1' : _ref$labelFlex,
    _ref$labelMargin = _ref.labelMargin,
    labelMargin = _ref$labelMargin === void 0 ? '0 4px' : _ref$labelMargin,
    _ref$itemMargin = _ref.itemMargin,
    itemMargin = _ref$itemMargin === void 0 ? '0' : _ref$itemMargin,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'column' : _ref$direction,
    _ref$itemDirection = _ref.itemDirection,
    itemDirection = _ref$itemDirection === void 0 ? 'row' : _ref$itemDirection,
    legendLabelProps = _ref.legendLabelProps,
    children = _ref.children,
    legendItemProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  // `Scale extends ScaleType` constraint is tricky
  //  could consider removing `scale` altogether in the future and making `domain: Datum[]` required
  var domain = inputDomain || ('domain' in scale ? scale.domain() : []);
  var labelFormatter = labelTransform({
    scale: scale,
    labelFormat: labelFormat
  });
  var labels = domain.map(labelFormatter);
  if (children) return /*#__PURE__*/React.createElement(React.Fragment, null, children(labels));
  return /*#__PURE__*/React.createElement("div", {
    className: cx('visx-legend', className),
    style: _extends({}, style, {
      flexDirection: direction
    })
  }, labels.map(function (label, i) {
    return /*#__PURE__*/React.createElement(LegendItem, _extends({
      key: "legend-" + label.text + "-" + i,
      margin: itemMargin,
      flexDirection: itemDirection
    }, legendItemProps), /*#__PURE__*/React.createElement(LegendShape, {
      shape: shape,
      height: shapeHeight,
      width: shapeWidth,
      margin: shapeMargin,
      item: domain[i],
      itemIndex: i,
      label: label,
      fill: fill,
      size: size,
      shapeStyle: shapeStyle
    }), /*#__PURE__*/React.createElement(LegendLabel, _extends({
      label: label.text,
      flex: labelFlex,
      margin: labelMargin,
      align: labelAlign
    }, legendLabelProps)));
  }));
}
Legend.propTypes = {
  children: _pt.func,
  className: _pt.string,
  domain: _pt.array,
  shapeWidth: _pt.oneOfType([_pt.string, _pt.number]),
  shapeHeight: _pt.oneOfType([_pt.string, _pt.number]),
  shapeMargin: _pt.oneOfType([_pt.string, _pt.number]),
  labelAlign: _pt.string,
  labelFlex: _pt.oneOfType([_pt.string, _pt.number]),
  labelMargin: _pt.oneOfType([_pt.string, _pt.number]),
  itemMargin: _pt.oneOfType([_pt.string, _pt.number]),
  fill: _pt.func,
  size: _pt.func,
  shapeStyle: _pt.func
};