"use strict";

exports.__esModule = true;
exports.default = LinkHorizontalLine;
exports.pathHorizontalLine = pathHorizontalLine;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _d3Path = require("d3-path");
var _accessors = require("../../../util/accessors");
var _excluded = ["className", "children", "innerRef", "data", "path", "x", "y", "source", "target"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function pathHorizontalLine(_ref) {
  var source = _ref.source,
    target = _ref.target,
    x = _ref.x,
    y = _ref.y;
  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);
    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);
    var path = (0, _d3Path.path)();
    path.moveTo(sx, sy);
    path.lineTo(tx, ty);
    return path.toString();
  };
}
function LinkHorizontalLine(_ref2) {
  var className = _ref2.className,
    children = _ref2.children,
    innerRef = _ref2.innerRef,
    data = _ref2.data,
    path = _ref2.path,
    _ref2$x = _ref2.x,
    x = _ref2$x === void 0 ? _accessors.getY : _ref2$x,
    _ref2$y = _ref2.y,
    y = _ref2$y === void 0 ? _accessors.getX : _ref2$y,
    _ref2$source = _ref2.source,
    source = _ref2$source === void 0 ? _accessors.getSource : _ref2$source,
    _ref2$target = _ref2.target,
    target = _ref2$target === void 0 ? _accessors.getTarget : _ref2$target,
    restProps = _objectWithoutPropertiesLoose(_ref2, _excluded);
  var pathGen = path || pathHorizontalLine({
    source: source,
    target: target,
    x: x,
    y: y
  });
  if (children) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children({
    path: pathGen
  }));
  return /*#__PURE__*/_react.default.createElement("path", _extends({
    ref: innerRef,
    className: (0, _classnames.default)('visx-link visx-link-horizontal-line', className),
    d: pathGen(data) || ''
  }, restProps));
}