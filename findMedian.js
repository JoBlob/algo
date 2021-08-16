function findMedian(arr) {
    // Write your code here
    var sortedArray = arr.sort(function(a, b){
        return a - b;
    });
    var med = Math.ceil(arr.length / 2) -1;
    return sortedArray[med];
}