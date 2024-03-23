function solution(array) {
    const frequency = {};
    
    array.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
    });
    
    let maxFrequency = 0;
    let mode = -1;
    
    Object.keys(frequency).forEach(key => {
        if (frequency[key] > maxFrequency) {
            maxFrequency = frequency[key];
            mode = parseInt(key);
        } else if (frequency[key] === maxFrequency) {
            mode = -1;
        }
    });
    
    if (maxFrequency === array.length) {
        return array[0];
    }
    

    return mode;
}

console.log(solution([1, 2, 3, 3, 3, 4],3))