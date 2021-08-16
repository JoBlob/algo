function birthdayCakeCandles(candles) {
    var max = Math.max(...candles);
    var counter = 0;
    
    candles.map(candle => {
        if(candle == max){
            counter++;
        }
    })
    
    return counter;
}