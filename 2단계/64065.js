function solution(s) {
    let answer = [];
    let arr = JSON.parse(s.replace(/{/g,"[").replace(/}/g,"]"));
    arr.sort((a,b) => a.length - b.length);
    arr.forEach(element => {
        element.forEach(num => {
            if(!answer.includes(num)) {
                answer.push(num)
            }
        })
    });
    return answer;
}

console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"))