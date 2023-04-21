export function scaleInvert(scale, value) {
  // Test if the scale is an ordinalScale or not,
  // Since an ordinalScale doesn't support invert function.
  if ('invert' in scale && typeof scale.invert !== 'undefined') {
    return scale.invert(value).valueOf();
  }
  var _ref = scale.range(),
    start = _ref[0],
    end = _ref[1];
  var i = 0;
  // ordinal should have step
  var step = 'step' in scale && typeof scale.step !== 'undefined' ? scale.step() : 1;
  var width = step * (end - start) / Math.abs(end - start);
  if (width > 0) {
    while (value > start + width * (i + 1)) {
      i += 1;
    }
  } else {
    while (value < start + width * (i + 1)) {
      i += 1;
    }
  }
  return i;
}
export function getDomainFromExtent(scale, start, end, tolerentDelta) {
  var domain;
  var invertedStart = scaleInvert(scale, start + (start < end ? -tolerentDelta : tolerentDelta));
  var invertedEnd = scaleInvert(scale, end + (end < start ? -tolerentDelta : tolerentDelta));
  var minValue = Math.min(invertedStart, invertedEnd);
  var maxValue = Math.max(invertedStart, invertedEnd);
  if ('invert' in scale && typeof scale.invert !== 'undefined') {
    domain = {
      start: minValue,
      end: maxValue
    };
  } else {
    var values = [];
    var scaleDomain = scale.domain();
    for (var i = minValue; i <= maxValue; i += 1) {
      values.push(scaleDomain[i]);
    }
    domain = {
      values: values
    };
  }
  return domain;
}
export function getPageCoordinates(event) {
  if (typeof window !== 'undefined' && window.TouchEvent && event instanceof TouchEvent) {
    return {
      pageX: event.touches[0].pageX,
      pageY: event.touches[0].pageY
    };
  }
  var pointerEvent = event;
  return {
    pageX: pointerEvent.pageX,
    pageY: pointerEvent.pageY
  };
}