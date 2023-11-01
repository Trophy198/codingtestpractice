function solution(absolutes, signs) {

    let answer = 0;
    const n = absolutes.length;
    for(let i = 0; i < n; i++) {
        const absolute = absolutes[i];
        const sign = signs[i];
        
        const value = sign ? absolute : -absolute;
        answer += value;
    }
    return answer;
}

console.log(solution([4,7,12],[true,false,true]))




function solution2(absolutes, signs) {

    signs = signs.map(sign => sign ? 1 : -1);

    let answer = 0;
    const n = absolutes.length;
    for(let i = 0; i < n; i++) {
        const absolute = absolutes[i];
        const sign = signs[i];
        
        const value = absolute * sign;
        answer += value;
    }
    return answer;
}

console.log(solution2([4,7,12],[true,false,true]))