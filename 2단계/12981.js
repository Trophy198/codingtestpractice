function solution(n, words) {
    let answer = [0, 0];
    let stack = [];
    
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        
        if (stack.includes(currentWord) || (i > 0 && currentWord[0] !== words[i - 1][words[i - 1].length - 1])) {
            answer = [i % n + 1, Math.floor(i / n) + 1];
            break;
        } else {
            stack.push(currentWord);
        }
    }
    
    return answer;
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
