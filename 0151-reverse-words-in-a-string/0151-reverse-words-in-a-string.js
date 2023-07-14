/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (string) => {
     let splitStr = string.split(" ").filter(word=>word.length>0)
    let reverseWord = "";
    for(let i = splitStr.length -1 ;i>=0 ;i--){
        if(i !== 0){
            reverseWord += `${splitStr[i]} `
        } else {
            reverseWord += `${splitStr[i]}`
        }
    }
    return reverseWord
};