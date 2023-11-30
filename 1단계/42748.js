function solution(array, commands) {
    let answer = [];
    for(let i = 0; i < commands.length; i++) {
        let arr = array.slice(commands[i][0] - 1,commands[i][1]);
        arr.sort((a,b) => a - b);
        answer.push(arr[commands[i][2] - 1]);
    }
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))


// i번재 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구해야함