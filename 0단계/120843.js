function solution(numbers, k) {
    let answer = 0;
    answer = numbers[(k - 1) * 2 % numbers.length];
    return answer;
}

console.log(solution([1,2,3,4],2));