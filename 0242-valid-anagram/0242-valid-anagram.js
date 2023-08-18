/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if(s.length === t.length){
    let sString = s.split("");
    let tString = t.split("");
    sString.sort();
    tString.sort();
    for(let i = 0;i<s.length;i++){
        if(sString[i] !== tString[i]){
            return false
        }
    }
    return true;
    }
    
    return false;
};