// add whatever parameters you deem necessary
function makeFreqCounter(str) {
  let freqCounter = new Map()

  for (let char of str) {
    let charCount = freqCounter.get(char) || 0
    freqCounter.set(char, charCount + 1)
  }

  return freqCounter
}

function sameFrequency(num1, num2) {
  const num1Str = num1.toString()
  const num2Str = num2.toString()

  if (num1Str.length !== num2Str.length) return false

  const num1Freq = makeFreqCounter(num1Str)
  const num2Freq = makeFreqCounter(num2Str)

  for (let key of num1Freq.keys()) {
    if (!num2Freq.has(key)) return false

    if (num2Freq.get(key) < num1Freq.get(key)) return false
  }

  return true
}
