/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
  if(rowIndex === 0){
      return [1]
  }
  
  if(rowIndex === 1){
      return [1,1]
  }
  
  const result = [];
  for(let i = 0;i<=rowIndex;i++){
    result.push([])
      for(let j = 0;j<=i;j++){
          if(j === 0 || j === i){
              result[i][j] = 1
          }else{
              result[i][j] = result[i-1][j-1] + result[i-1][j]
          }
      }
  }
  return result[result.length-1]
};
