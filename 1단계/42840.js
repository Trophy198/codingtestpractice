function solution(answers) {
    const repeatCount = answers.length;
    const mathHaterPatterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    const scores = [0, 0, 0]; // 각 수포자의 점수를 저장하는 배열

    for (let i = 0; i < repeatCount; i++) {
        for (let j = 0; j < mathHaterPatterns.length; j++) {
            if (answers[i] === mathHaterPatterns[j][i % mathHaterPatterns[j].length]) {
                scores[j]++; // 정답일 경우 해당 수포자의 점수 증가
            }
        }
    }

    const maxScore = Math.max(...scores); // 가장 많이 맞춘 점수

    const winners = [];
    for (let k = 0; k < scores.length; k++) {
        if (scores[k] === maxScore) {
            winners.push(k + 1); // 가장 많이 맞춘 수포자들의 번호 저장
        }
    }

    return winners;
}
console.log(solution([1,3,2,4,2]));

/**
 * 수포자는 총 3명
 * 한명은 1,2,3,4,5 반복 (1번 수포자)
 * 또 다른 한명은 2,1,2,3,2,4,2,5 반복 (2번 수포자)
 * 마지막 한명은 3,3,1,1,2,2,4,4,5,5 반복 (3번 수포자)
 */