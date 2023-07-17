const isDecrease = (nums) => {
    // console.log(`check decrease array`)
    for(let i = 0 ; i < nums.length-1;i++){
        if(nums[i] < nums[i+1]){
            // console.log(`found increase because ${nums[i]} < ${nums[i+1]}`)
            return false
        }
    }
    return true
}
const isIncrease = (nums) => {
    // console.log(`check increase array`)
    for(let i = 0 ; i < nums.length-1;i++){
        if(nums[i] > nums[i+1]){
            // console.log(`found decrease because ${nums[i]} > ${nums[i+1]}`)
            return false
        }
    }
    return true
}
const isMonotonic = (nums) => {
    console.log(`this sequence = {${nums}}`)
    let decrease = isDecrease(nums),increase = isIncrease(nums);
    // console.log(`isDecrease = ${decrease} and isIncrease = ${increase}`)
    if( decrease === false && increase === false){
        return false
   }
   
   return true
};