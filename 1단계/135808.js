function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let result = 0;
    for(let i = m-1; i < score.length; i += m) {
        result += score[i] * m;
    }
    return result;
}

console.log(solution(3,4,[1, 2, 3, 1, 2, 3, 1]))