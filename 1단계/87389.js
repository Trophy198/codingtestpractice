function solution(n) {
    let answer = Number.MAX_SAFE_INTEGER;
    for(let i = 1; i <= n; i++) {
        if(n % i === 1) {
           answer = Math.min(answer,i)
        }
    }
    return answer;
}

console.log(solution(10))


/**
 * 10을 n으로 나눳을때 나머지가 1인걸 찾아 그중 가장 작은 자연수
 */