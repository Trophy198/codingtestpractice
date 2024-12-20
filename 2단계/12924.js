function solution(n) {
    let count = 0;
    let k = 1;
    
    while (k * (k - 1) / 2 < n) {
        if ((n - (k * (k - 1)) / 2) % k === 0) {
            count += 1;
        }
        k += 1;
    }
    
    return count;
}


console.log(solution(15));