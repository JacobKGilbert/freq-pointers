// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  const obj = {}
  let arr1Idx = 0
  let arr2Idx = 0

  while (arr1Idx < arr1.length) {
    const key = arr1[arr1Idx]
    const val = arr2[arr2Idx] || null

    obj[key] = val
    
    arr1Idx++
    arr2Idx++
  }

  return obj
}
