function solution(n, left, right) {
    let answer = [];
    for(let i = left; i <= right; i++) {
        let row = Math.floor(i / n);
        let col = i % n;
        answer.push(Math.max(row + 1, col + 1));
    }
    return answer;
}


console.log(solution(4,7,14))
