function solution(str) {
    let answer = '';
    let word = true;

    for(let i = 0; i < str.length; i++) {
        if(word && /[a-zA-z]/.test(str[i])) {
            answer += str[i].toUpperCase();
        } else {
            answer += str[i].toLowerCase();
        }
        word = (str[i] === ' ' && str[i + 1] !== ' ');
    }
    return answer;
}
console.log(solution("3people 2nfollowed Me"));

//공백문자가 연속해서 나올 수 있는 경우를 따져야됨.