function solution(n) {
    let answer = n.toString().split('');
    answer.sort((a,b) => b - a);
    return Number(answer.map(Number).join(''))
}


console.log(solution(118372))