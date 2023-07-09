/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (numbers, target) => {
  let low = 0;
  let height = numbers.length;
  let mid = low + Math.floor((height - low) / 2);
  while (low < height) {
    if (numbers[mid] === target) {
      return mid;
    }
    if (numbers[mid] > target) {
      height = mid;
    }
    if (numbers[mid] < target) {
      low = mid + 1;
    }
    mid = low + Math.floor((height - low) / 2);
  }
  return -1;
};