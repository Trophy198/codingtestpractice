/** 더 크게 합치기 */
function solution(a, b) {
    if(`${a}${b}` <= `${b}${a}`) {
answer = Number(`${b}${a}`);
    } else {
        answer= Number(`${a}${b}`)
    }
   
    return answer;
}

