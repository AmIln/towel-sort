
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArray = [];
  if (matrix === undefined) {
    return [];
  }
  for (let i=0;i<=matrix.length-1;i++) {
    if (i%2 != 0) {
      newArray.push(matrix[i].reverse())
    } else {
      newArray.push(matrix[i])
    }
  }
  return newArray.flat();
}
