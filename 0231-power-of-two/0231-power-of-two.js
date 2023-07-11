/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
    if (n < 1) {
    return false;
  }
   
  return Math.log2(n) % 1 === 0;
}