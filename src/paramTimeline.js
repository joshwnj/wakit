module.exports = function paramTimeline (param, steps) {
  let time

  steps.forEach(step => {
    if (step.time || !time) {
      time = step.time || 0
    }

    if (step.value) {
      param.setValueAtTime(step.value, time)
      return
    }

    if (step.linearTo) {
      param.linearRampToValueAtTime(step.linearTo, time + step.duration)
      time += step.duration
      return
    }

    if (step.expTo) {
      param.exponentialRampToValueAtTime(step.expTo, time + step.duration)
      time += step.duration
      return
    }
  })
  
  return time
}
