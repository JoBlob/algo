function diagonalDifference(arr) {
    var sumDiagonalsMain = 0;
    var sumDiagonalsSecond = 0;
    var matrixLength = arr.length;

  for (var i = 0; i < matrixLength; i++) {
     sumDiagonalsMain += arr[i][i];
     sumDiagonalsSecond += arr[i][matrixLength-i-1];
  }
  var result = sumDiagonalsMain - sumDiagonalsSecond;
  
  if(result > 0) {
      return result;
  }
  
  else if(result < 0){
      return (result * (-1));
  }
  else return 0;

}