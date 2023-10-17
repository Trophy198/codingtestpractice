function solution(price,money,count) {
    let answer = 0;
    for(let i = 1; i <= count; i++) {
        answer += price * i;
    }
    if(answer < money) {
        return 0;
    }
    return answer - money;
}
console.log(solution(3,20,4))