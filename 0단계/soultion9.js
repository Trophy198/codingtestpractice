/** 조건 문자열 */ 

function solution(ineq, eq, n, m) {
    
    return eval(`${n} ${ineq}${eq === '!' ? '' :'='}${m}`) ? 1 : 0

}

console.log(solution("<","=",20,50,1))