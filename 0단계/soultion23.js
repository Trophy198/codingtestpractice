function solution(dots) {
    for (let i = 0; i < dots.length - 1; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            for (let k = 0; k < dots.length - 1; k++) {
                if (k === i || k === j) continue;
                for (let l = k + 1; l < dots.length; l++) {
                    if (l === i || l === j) continue;
                    let slope1 = (dots[j][1] - dots[i][1]) / (dots[j][0] - dots[i][0]);
                    let slope2 = (dots[l][1] - dots[k][1]) / (dots[l][0] - dots[k][0]);
                    if(slope1 === slope2) return 1;
                }
            }
        }
    }
    return 0;
}
console.log(solution([[1, 2], [5, 1], [3, 6], [6, 3]]))