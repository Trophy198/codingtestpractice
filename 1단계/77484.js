function solution(lottos, win_nums) {
    let answer = [];
    let zeroCount = lottos.filter(num => num === 0).length;
    let count = lottos.reduce((acc,cur) => {
        if(win_nums.includes(cur)) {
            return acc + 1;
        }
        return acc;
    },0)

    let highestRank = getRank(count + zeroCount);
    let lowestRank = getRank(count);

    answer.push(highestRank, lowestRank);
    return answer;
}

function getRank(count) {
    switch(count) {
        case 6:
            return 1;
        case 5:
            return 2;
        case 4:
            return 3;
        case 3:
            return 4;
        case 2:
            return 5;
        default:
            return 6;
    }
}

console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]))