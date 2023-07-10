/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
    for (let i = 0; i <= x/2+1 ;i++){
        if(i*i > x){
            return i-1
        } 

        if (i*i === x){
            return i
        }
    }
};