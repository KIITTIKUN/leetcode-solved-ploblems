/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
     if(rowIndex === 0){
        return [[1]]
    }

    const triangle = [] 
    for(let i = 0;i<=rowIndex;i++){
        triangle.push([]);
        for(let j =0; j <= i;j++){
            if(j===0 || j === i){
                triangle[i][j] = 1
            } else {
                triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
            }
        }
    }
    return triangle[rowIndex];
};