function solution(d, budget) {
    let n = d.length;
    let arr = d.sort((a, b) => a - b);
    let sum = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (sum <= budget) {
            count++;
        } else {
            break;
        }
    }
    return count;
}

console.log(solution([1,3,2,5,4],9))