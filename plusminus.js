function plusminus(arr) {
    let positives = 0;
    let negatives = 0;
    let zeroes = 0;
    const length = arr.length;
    
    arr.map(item => {
        switch(Math.sign(item)) {
            case 1:
                positives++;
            break;
            case -1:
                negatives++;
            break;
            case 0:
                zeroes++;
            break;
        }
    })
    
    let positiveRatio = positives/parseFloat(length);
    let negativeRatio = negatives/parseFloat(length);
    let neutralRatio = zeroes/parseFloat(length);
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(neutralRatio.toFixed(6));
}