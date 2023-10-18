function solution(str) {
    let answer = "";
    let words = str.split(' ');
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
           if(j % 2 === 0) {
            answer += words[i][j].toUpperCase();
           } else {
            answer += words[i][j].toLowerCase();
           }
           
        }
        answer += ' '
    }
    return answer.slice(0,-1);
}

console.log(solution("try hello world"))


function solution1(str) {
    let answer = [];
    let words = str.split(' ');
    for (const word of words) {
        const formattedWord = format(word);
        answer.push(formattedWord);
    }
    return answer.join(' ');
}

function format(word) {
    let formattedword = "";
    const length = word.length;
    for(let j = 0; j < length; j++) {
       if(j % 2 === 0) {
        formattedword += word[j].toUpperCase();
       } else {
        formattedword += word[j].toLowerCase();
       }
    }
    return formattedword;
}

console.log(solution1("try hello world"))