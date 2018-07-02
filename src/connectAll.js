function connectAll (...args) {
  for (var i = 0; i < args.length - 1; i += 1) {
    args[i].connect(args[i + 1])
  }

  return args[0]
}

connectAll.obj = function (obj) {
  connectAll(...Object.values(obj))
  return obj
}

module.exports = connectAll
