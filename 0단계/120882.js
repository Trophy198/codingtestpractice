function solution(score) {
    let averages = score.map(s => (s[0] + s[1]) / 2);
    let sortedAverages = [...averages].sort((a, b) => b - a);
    let ranks = averages.map(avg => sortedAverages.indexOf(avg) + 1);
    return ranks;
}

console.log(solution([[80, 70], [90, 50], [40, 70], [50, 80]]));