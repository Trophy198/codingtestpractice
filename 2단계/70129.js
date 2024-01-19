function solution(s) {
    let answer = [0, 0];

    while(s !== '1') {
        let onesCount = 0;
        for(let i = 0; i < s.length; i++) {
            if(s[i] === '1') {
                onesCount += 1;
            }
        }
        answer[0] += 1;
        answer[1] += s.length - onesCount;
        s = onesCount.toString(2);
    }
    return answer;
}

console.log(solution("110010101001"))