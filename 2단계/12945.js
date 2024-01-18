function solution(n) {
    let num = 1;
    let pre = 0;
    
    for(let i = 1; i <= n; i++) {
        let temp = pre % 1234567;
        pre = num % 1234567;
        num = temp + pre;
    }
    return pre % 1234567;
}



console.log(solution(3));