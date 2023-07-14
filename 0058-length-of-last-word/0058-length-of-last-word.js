/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    let splitStr = s.split(" ").filter(word=>word.length>0)
   return splitStr[splitStr.length-1].length
};