/**
 * @param {string} s
 * @return {number}
 */
const romanValue = { 'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000 };
const romanToInt = function(s) {
    const cutString = s.split("");
    const convertString = [];
    let result = 0;
    for(let i=cutString.length-1;i>=0;i--){
        convertString.push(romanValue[cutString[i]])
    }
    for (let i=0; i < convertString.length;i++){
        if(i != 0 || i != convertString.length - 1 ){
            if(convertString[i]< convertString[i-1]){
                result -= convertString[i];
            } else{
                result += convertString[i];
            }
        } else {
            result += convertString[i];
        }
    }
    return result
};