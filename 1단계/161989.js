function solution(n, m, section) {
    section.sort((a, b) => a - b); // 시작점을 기준으로 정렬을 한 상태

    let count = 0;
    let end = 0;

    for(let start of section) {
        if(start >= end) {  // 새로운 구간을 위한 확인작업
            count += 1;
            end = start + m;
        }
    }
}

console.log(solution(8,4,[2,3,6]));