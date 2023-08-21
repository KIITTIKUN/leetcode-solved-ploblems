/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
    const copyMatrix = [];
    for(let i = 0; i< matrix.length;i++){
      copyMatrix.push([]);
      for(let j = 0;j < matrix[i].length;j++){
        copyMatrix[i].push(matrix[i][j])
      }
    }

      for(let i = 0 ;i <copyMatrix.length;i++){
        let maxIndex = matrix.length - 1;
        for(let j = 0; j < copyMatrix[i].length ;j++){
          matrix[i][j] = copyMatrix[maxIndex][i] ;
          maxIndex--;
        }
      }
  };