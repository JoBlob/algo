function gradingStudents(grades) {
        var res = grades.map(item => {    
            var nextRound = Math.ceil(item / 5) * 5;
            
            var diff = nextRound - item;
            if((diff < 3) && (item >= 38)){
                return nextRound;
            }
            else {
                return item;
            }
    })
    return res;
}