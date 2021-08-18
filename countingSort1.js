function countingSort(arr) {
    const counts = []
     for(let i = 0; i < 100; i++) {
         counts[i] = 0;
     }
     
     for(let i = 0; i < arr.length; i++) {
         counts[arr[i]]++;
     }
  
     return counts
 }