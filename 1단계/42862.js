function solution(n, lost, reserve) {
    let answer = 0;
    let lostArr = new Array(n).fill(0);

    for (let i = 0; i < lost.length; i++) {
        lostArr[lost[i] - 1] = -1;
    }
    
    for(let j = 0; j < reserve.length; j++) {
        if (lostArr[reserve[j] - 1] === -1) {
            lostArr[reserve[j] - 1] = 0;
        } else {
            lostArr[reserve[j] - 1] = 1;
        }
    }
    for (let k = 0; k < lostArr.length; k++) {
        if (lostArr[k] === 1) {
            if (k > 0 && lostArr[k - 1] === -1) {
                lostArr[k - 1] = 0;
                lostArr[k] = 0;
            } else if (k < lostArr.length - 1 && lostArr[k + 1] === -1) {
                lostArr[k + 1] = 0;
                lostArr[k] = 0;
            }
        }
    }

    for (let i = 0; i < lostArr.length; i++) {
        if (lostArr[i] !== -1) {
            answer++;
        }
    }
    return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));