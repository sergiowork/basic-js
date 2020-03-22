module.exports = function countCats(matrix) {
  let arrCats = matrix.join(',').split(',');
  let countCats = 0;

  for (let i = 0; i < arrCats.length; i++) {
    if (arrCats[i] == '^^') {
       countCats++;
    }
  }
  
  return countCats;
};
