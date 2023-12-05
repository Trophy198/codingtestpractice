function solution(s) {
    let alphabet = {};
    let result = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (alphabet[char] === undefined) {
            result.push(-1);
        } else {
            result.push(i - alphabet[char]);
        }
        alphabet[char] = i;
    }
    return result;
}

console.log(solution("banana"));