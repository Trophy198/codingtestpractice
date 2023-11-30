function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    for (let i = 0; i < sizes.length; i++) {
            let [width, height] = sizes[i].sort((a, b) => b - a);
            maxWidth = Math.max(maxWidth, width);
            maxHeight = Math.max(maxHeight, height);
    }

    return maxWidth * maxHeight;
}

console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]));