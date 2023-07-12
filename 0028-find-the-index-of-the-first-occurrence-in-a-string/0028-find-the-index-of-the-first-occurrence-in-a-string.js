/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) =>{
    const max = haystack.length, min = needle.length
    if(max < min){
        return -1
    }
    for(let i=0; i<max;i++){
        if(haystack[i] === needle[0]){
        let checker = 0;
        for(let j = 0;j<min;j++){;
            if(haystack[i+j] === needle[j]){
                checker +=1;
                if(needle.length === checker){
                return i
                }
            }
        }    
        }
    }
    return -1
};