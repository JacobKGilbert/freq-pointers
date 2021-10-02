// add whatever parameters you deem necessary
function makeFreqCounter(str) {
  let freqCounter = new Map()

  for (let char of str) {
    let charCount = freqCounter.get(char) || 0
    freqCounter.set(char, charCount + 1)
  }

  return freqCounter
}

function constructNote(message, letters) {
  if (message.length > letters.length) return false
  
  let messageFreqs = makeFreqCounter(message)
  let letterFreqs = makeFreqCounter(letters)

  for (let key of messageFreqs.keys()) {
    if (!letterFreqs.has(key)) return false
    
    if (letterFreqs.get(key) < messageFreqs.get(key)) return false
  }

  return true
}