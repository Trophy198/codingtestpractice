function solution(sequence, k) {
    let answer = [];
    let sum = 0;
    let lt = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for(let rt = 0; rt < sequence.length; rt++) {
        sum += sequence[rt];

        while(sum > k) {
            sum -= sequence[lt++];
        }
        if(sum === k) {
            if(rt - lt + 1 < min) {
                min = rt - lt + 1;
                answer = [lt, rt];
            }
        }
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5],7));