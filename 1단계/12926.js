function solution(s, n) {
    let answer = [];
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === ' ') {
            answer.push(char);
            continue;
        }

        let charCode = char.charCodeAt(0);
        let base = char === char.toUpperCase() ? 65 : 97;
        let newCharCode = ((charCode + n - base) % 26) + base;
        answer.push(String.fromCharCode(newCharCode));
    }
    return answer.join('');
}

console.log(solution("AB",1));