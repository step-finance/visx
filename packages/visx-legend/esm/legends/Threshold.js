import _pt from "prop-types";
var _excluded = ["scale", "domain", "labelFormat", "labelTransform", "labelDelimiter", "labelLower", "labelUpper"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import Legend from './Legend';
import identity from '../util/identity';

// eslint-disable-next-line @typescript-eslint/no-explicit-any

var formatZero = function formatZero(label) {
  return label === 0 ? '0' : label || '';
};
/** Default transform implicitly assumes that Datum is of type number. */
function defaultTransform(_ref) {
  var labelDelimiter = _ref.labelDelimiter,
    labelLower = _ref.labelLower,
    labelUpper = _ref.labelUpper;
  return function (_ref2) {
    var scale = _ref2.scale,
      labelFormat = _ref2.labelFormat;
    var scaleRange = scale.range();
    var scaleDomain = scale.domain();
    return function (d, i) {
      var _ref3 = scaleRange.length >= i ? scale.invertExtent(scaleRange[i]) : [undefined, undefined],
        d0 = _ref3[0],
        d1 = _ref3[1];
      var delimiter = " " + labelDelimiter + " ";
      var text = '';
      var value;
      if (d0 == null && typeof d1 === 'number') {
        // lower threshold e.g., [undefined, number]
        delimiter = labelLower || delimiter;
        value = d1 - 1;
        text = "" + delimiter + formatZero(labelFormat(d1, i));
      } else if (d0 != null && d1 != null) {
        // threshold step
        value = d;
        text = "" + formatZero(labelFormat(d0, i)) + delimiter + formatZero(labelFormat(d1, i));
      } else if (typeof d0 === 'number' && d1 == null) {
        // upper threshold e.g., [number, undefined]
        delimiter = labelUpper || delimiter;
        value = d0 + scaleDomain[1]; // x0,x1 are from the domain, so the domain is numeric if d0 is
        text = "" + delimiter + formatZero(labelFormat(d0, i));
      }
      return {
        extent: [d0, d1],
        value: scale(value || d),
        text: text,
        datum: d,
        index: i
      };
    };
  };
}
export default function Threshold(_ref4) {
  var scale = _ref4.scale,
    inputDomain = _ref4.domain,
    _ref4$labelFormat = _ref4.labelFormat,
    labelFormat = _ref4$labelFormat === void 0 ? identity : _ref4$labelFormat,
    inputLabelTransform = _ref4.labelTransform,
    _ref4$labelDelimiter = _ref4.labelDelimiter,
    labelDelimiter = _ref4$labelDelimiter === void 0 ? 'to' : _ref4$labelDelimiter,
    _ref4$labelLower = _ref4.labelLower,
    labelLower = _ref4$labelLower === void 0 ? 'Less than ' : _ref4$labelLower,
    _ref4$labelUpper = _ref4.labelUpper,
    labelUpper = _ref4$labelUpper === void 0 ? 'More than ' : _ref4$labelUpper,
    restProps = _objectWithoutPropertiesLoose(_ref4, _excluded);
  // d3 docs specify that for n values in a domain, there should be n+1 values in the range
  // https://github.com/d3/d3-scale#threshold_domain
  // therefore if a domain is not specified we transform the range into input values
  // because it should contain more elements
  var domain = inputDomain || scale.range().map(function (output) {
    return scale.invertExtent(output)[0];
  });
  var labelTransform = inputLabelTransform || defaultTransform({
    labelDelimiter: labelDelimiter,
    labelLower: labelLower,
    labelUpper: labelUpper
  });
  return /*#__PURE__*/React.createElement(Legend, _extends({
    scale: scale,
    domain: domain,
    labelFormat: labelFormat,
    labelTransform: labelTransform
  }, restProps));
}
Threshold.propTypes = {
  labelDelimiter: _pt.string,
  labelLower: _pt.string,
  labelUpper: _pt.string
};