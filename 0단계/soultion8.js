/** 홀짝에 따라 다른 값 반환하기 */
/** 홀짝에 따라 다른 값 반환하기 */
function solution(n) {
    let answer = 0;
    if (n % 2 === 0) { 
        for (let i = 2; i <= n; i += 2) {  
            answer += i ** 2; 
        }
    } else { 
        for (let i = 1; i <= n; i += 2) { 
            answer += i; 
        }
    }
    return answer;
}

console.log(solution(7));  
