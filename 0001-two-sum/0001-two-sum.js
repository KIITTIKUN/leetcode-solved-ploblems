/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numArray, target) => {
    for(let i = 0;i< numArray.length;i++){
        for(let j = i+1; j <numArray.length;j++){
            if(numArray[i]+numArray[j] === target){
                return [i,j]
            }
        }
    }
}