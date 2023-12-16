function solution(n) {
    let answer = Math.sqrt(n);
    if(Number.isInteger(answer)) return Math.pow(answer + 1,2);
     else return -1;
}
console.log(solution(121))