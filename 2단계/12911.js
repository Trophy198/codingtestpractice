function solution(n) {
    let lengthOfCondition = (n.toString(2).split('').filter(char => char === '1').length);
    let nextNum = n + 1;

    while (true) {
        if(nextNum.toString(2).split('').filter(char => char === '1').length === lengthOfCondition) {
            return nextNum;
        }
        nextNum += 1;
    }
}

console.log(solution(78));