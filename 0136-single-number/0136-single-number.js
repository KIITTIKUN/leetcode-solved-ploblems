/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    if(nums.length === 1){
      return nums[0]
    }

   for(let i = 0;i < nums.length;i++){
      let fontArray = nums.slice(0,i);
      let lastArray = nums.slice(i+1);
      let newArray = [...fontArray, ...lastArray]
      if(newArray.indexOf(nums[i]) === -1)
        return nums[i];
      }
};