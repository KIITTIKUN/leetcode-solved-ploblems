/**
 * @param {number} number
 * @return {string}
 */
const unUsable = {IV :/IIII/,
                IX : /VIIII/, 
                XL : /XXXX/,
                XC : /LXXXX/,
                CD : /CCCC/,
                CM : /DCCCC/}; 

const intToRoman = (number) => {
    const roman = {1:"I",5:"V",10:"X",50:"L",100:"C",500:"D",1000:"M"}
    let result = "";
    let i = Object.keys(roman).length-1;
        while(number > 0){
            if(number - Object.keys(roman)[i] >= 0){
                number = number - parseInt(Object.keys(roman)[i])
                result += Object.values(roman)[i]
            } else {
                i--
            }
        }
        return result.replace(unUsable.CM, 'CM')
        .replace(unUsable.CD, 'CD')
        .replace(unUsable.XC, 'XC')
        .replace(unUsable.XL, 'XL')
        .replace(unUsable.IX, 'IX')
        .replace(unUsable.IV, 'IV');
    }