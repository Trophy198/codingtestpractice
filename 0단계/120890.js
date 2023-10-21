function solution(array, n) {
    let closestNum = array[0];
    let minDiff = Math.abs(n - array[0]);

    for (let i = 1; i < array.length; i++) {
        const diff = Math.abs(n - array[i]);
        if (diff < minDiff || (diff === minDiff && array[i] < closestNum)) {
            closestNum = array[i];
            minDiff = diff;
        }
    }
    return closestNum;
}

console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));
