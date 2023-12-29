function solution(people, limit) {
    let count = 0;
    let sortweight = people.sort((a, b) => a - b);

    while(people.length !== 0) {
        if(sortweight[0] + sortweight[sortweight.length - 1] <= limit) {
            count += 1;
            sortweight.shift();
            sortweight.pop();
        } else {
            count += 1;
            sortweight.pop();
        }
    }
    return count;
}

console.log(solution([70, 50, 80, 50], 100));

// 그리디 기본 문제

