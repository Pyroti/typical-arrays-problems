
exports.min = function min (array) {
  return (array != undefined && array.length != 0) ? array.reduce((min, current) => (min < current) ? min : current) : 0;
}

exports.max = function max (array) {
  return (array != undefined && array.length != 0) ? array.reduce((max, current) => (max > current) ? max : current) : 0;
}

exports.avg = function avg (array) {
  return (array != undefined && array.length != 0) ? array.reduce((sum, current) => (sum + current)) / array.length : 0;
}
