function solution(arr) {
    let answer = [];
    for(let i = 0; i < arr.length; i ++) {
       if (arr[i] !== arr[i + 1]) {
       answer.push(arr[i])
       }
    }
    return answer;
}

console.log(solution([1,1,3,3,0,1,1]))

function solution1(arr) {
    let answer = [];
    for (const num of arr) {
        if (answer[answer.length - 1] !== num) {
            answer.push(num);
        }
    }
    return answer;
}

console.log(solution1([1,1,3,3,0,1,1]))