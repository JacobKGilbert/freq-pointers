// add whatever parameters you deem necessary
function averagePair(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let sum = nums[left] + nums[right]

    if (sum === target * 2) {
      return true
    } else if (sum > target * 2) {
      right--;
    } else {
      left++;
    }
  }

  return false
}
