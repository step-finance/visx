"use strict";

exports.__esModule = true;
exports.bottomTickLabelProps = void 0;
exports.default = AxisBottom;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Axis = _interopRequireDefault(require("./Axis"));
var _orientation = _interopRequireDefault(require("../constants/orientation"));
var _excluded = ["axisClassName", "labelOffset", "tickLabelProps", "tickLength"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var bottomTickLabelProps = function bottomTickLabelProps( /** tickValue, index */
) {
  return {
    dy: '0.25em',
    fill: '#222',
    fontFamily: 'Arial',
    fontSize: 10,
    textAnchor: 'middle'
  };
};
exports.bottomTickLabelProps = bottomTickLabelProps;
function AxisBottom(_ref) {
  var axisClassName = _ref.axisClassName,
    _ref$labelOffset = _ref.labelOffset,
    labelOffset = _ref$labelOffset === void 0 ? 8 : _ref$labelOffset,
    _ref$tickLabelProps = _ref.tickLabelProps,
    tickLabelProps = _ref$tickLabelProps === void 0 ? bottomTickLabelProps : _ref$tickLabelProps,
    _ref$tickLength = _ref.tickLength,
    tickLength = _ref$tickLength === void 0 ? 8 : _ref$tickLength,
    restProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_Axis.default, _extends({
    axisClassName: (0, _classnames.default)('visx-axis-bottom', axisClassName),
    labelOffset: labelOffset,
    orientation: _orientation.default.bottom,
    tickLabelProps: tickLabelProps,
    tickLength: tickLength
  }, restProps));
}