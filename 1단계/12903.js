function solution(str) {
    let answer = [];
    let value = Math.floor(str.length / 2);
    
    if(str.length % 2 !== 0) {
        return str[value]
    } else {
        answer.push(str[value - 1],str[value]);
        return answer.join('');
   }
}

console.log(solution("abcsde"))