function compareTriplets(a, b) {
    var aScore = 0;
    var bScore = 0;
    
    for ( let i=0; i < a.length; i++)
    {   
        if(a[i] > b[i]){
            aScore++
        }
        else if (b[i] > a[i]) {
            bScore++
        }  
    }
    var results = [aScore, bScore];
    
    return results;

}