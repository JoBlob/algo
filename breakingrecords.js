function breakingRecords(scores) {
    let low = scores[0];
    let high = scores[0];
    
    let lowScore = 0;
    let highScore = 0;
    
    for(const score of scores){
        if(high < score){
            high = score;
            highScore++;
        }
        else if (low > score){
            low = score;
            lowScore++;
        }
    }    
    
    return [highScore, lowScore];
    console.log('score', scores)

}