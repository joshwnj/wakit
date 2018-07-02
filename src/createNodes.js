const setParams = require('./setParams')

function createNode (ac, info) {
  if (!info.type) { debugger }
  const func = `create${info.type}`
  return ac[func]()
}

module.exports = function (ac, info) {
  let prev
  const nodes = {}

  Object.keys(info).forEach(key => {
    const item = info[key]
    
    if (item instanceof AudioParam || item instanceof AudioNode) {
      prev.connect(item)
      return
    }

    const node = item.node || createNode(ac, item)

    if (node instanceof AudioNode) {
      nodes[key] = node
    }

    if (item.params) {
      setParams(node, item.params)
    }

    // connect previous node to this one
    if (prev) {
      prev.connect(node)
    }

    prev = node
  })

  return nodes
}
