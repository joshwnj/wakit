// https://github.com/benji6/virtual-audio-graph/blob/master/src/data.ts
const audioParamProperties = [
  'attack',
  'delayTime',
  'detune',
  'frequency',
  'gain',
  'knee',
  'pan',
  'playbackRate',
  'ratio',
  'reduction',
  'release',
  'threshold',
  'Q',
]

module.exports = function setParams (node, params) {
  Object.keys(params).forEach(key => {
    const value = params[key]
    if (audioParamProperties.indexOf(key) >= 0) {
      node[key].value = value
    } else {
      node[key] = value
    }
  })
  
  return node
}

module.exports.delta = function delta (node, params) {
  Object.keys(params).forEach(key => {
    const value = params[key]
    if (audioParamProperties.indexOf(key) >= 0) {
      node[key].value += value
    } else {
      node[key] += value
    }
  })
  
  return node
}
