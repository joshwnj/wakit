function percentRange (min, max, percent) {
  const range = max - min
  return min + (percent * range)
}

function wrap (number, lower, upper) {
  if (number < lower) { return upper - 1 }
  if (number >= upper) { return lower }
  return number
}

module.exports = {
  percentRange,
  wrap
}
