function inRange (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function floatInRange (min, max) {
  return min + (Math.random() * (max - min))
}

function from (values) {
  return values[inRange(0, values.length)]
}

module.exports = {
  inRange,
  floatInRange,
  from
}
