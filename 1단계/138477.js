function solution(k, score) {
    let hallOfFame = [];
    let answer = [];
    for(let i = 0; i < score.length; i++) {
        if(i < k) {
            hallOfFame.push(score[i]);
        } else {
            hallOfFame.sort((a,b) => b - a);
            if(score[i] > hallOfFame[k - 1]) {
                hallOfFame.pop();
                hallOfFame.push(score[i]);
            }
        }
        hallOfFame.sort((a, b) => a - b); 
        answer.push(hallOfFame[0]);
    }
    return answer;
}

console.log(solution(3,[10, 100, 20, 150, 1, 100, 200]));