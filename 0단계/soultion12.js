/** 등차수열의 특정한항만 더하기 */

function solution(a, d, included) {
    var answer = 0;
    for(let i=0;i<included.length; i++) {
    if(included[i] === true) {
        answer += (a+d * i)
    }
    }
     return answer;
}

console.log(solution(3,4,[true, false, false, true, true]))