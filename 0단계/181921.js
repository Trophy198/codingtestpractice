function solution(l, r) {
    let answer = [];

    function generateNumber(current) {
        if (current > r) return;

        if (current >= l && current <= r) {
            answer.push(current);
        }

        if (current !== 0) {
            generateNumber(current * 10);
        }

        generateNumber(current * 10 + 5);
    }

    generateNumber(5);

    if (answer.length === 0) return [-1];

    return answer.sort((a,b) => a - b);
}

console.log(solution(5,555))