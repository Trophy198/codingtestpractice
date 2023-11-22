function solution(numbers, hand) {
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    let leftPos = keypad['*'];
    let rightPos = keypad['#'];

    let answer = '';
    numbers.forEach(num => {
        if (num === 1 || num === 4 || num === 7) {
            answer += 'L';
            leftPos = keypad[num];
        } else if (num === 3 || num === 6 || num === 9) {
            answer += 'R';
            rightPos = keypad[num];
        } else {
            const leftDist = calculateDistance(leftPos, keypad[num]);
            const rightDist = calculateDistance(rightPos, keypad[num]);

            if (leftDist < rightDist || (leftDist === rightDist && hand === "left")) {
                answer += 'L';
                leftPos = keypad[num];
            } else {
                answer += 'R';
                rightPos = keypad[num];
            }
        }
    });

    return answer;
}

function calculateDistance(pos1, pos2) {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right"))
