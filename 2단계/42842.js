function solution(brown, yellow) {
    let sum = brown + yellow;
    for (let height = 3; height <= sum; height++) {
        if (sum % height === 0) {
            let width = sum / height;
            if ((width - 2) * (height - 2) === yellow) {
                return [width, height]
            }
        }
    }
}

console.log(solution(10,2));

/**
 * brown + yellow = x * y
 * (x-2) * (y-2) = yello 
 */

