function solution(a,b) {
    let answer = 0;
    let n = a.length;
    for(let i = 0; i < n; i++) {
       answer += a[i] * b[i];
    }
    return answer;
}

console.log(solution([1,2,3,4],[-3,-1,0,2]))