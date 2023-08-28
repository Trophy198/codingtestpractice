/** 두수의 연산값 비교하기 */
function solution(a, b) {  
if(Number(`${a}${b}` <= 2*a*b)) {
    answer = 2 * a * b;
} else {
    answer = Number(`${a}${b}`);
}
    return answer;
}
