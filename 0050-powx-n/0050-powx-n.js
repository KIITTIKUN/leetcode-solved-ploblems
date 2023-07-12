/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
    let result = 1;
    if(n===0){
        return 1
    } 
    else if (n > 1){
        for(let i = 0;i<n;i++){
            result *= x;
        }
        return result
    }
    return x**n
};