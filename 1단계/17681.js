function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < n; i++) {
        answer.push(arr1[i] | arr2[i]);
    }
    for(let j = 0; j < answer.length; j++) {
        let row = answer[j].toString(2);
        let newRow = [];
        for(let k = 0; k < row.length; k++) {
            newRow += row[k] === "1" ? "#" : " ";
        }
        answer[j] = newRow.padStart(n, ' ');
    }
   
    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));


// padStart : 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
// padEnd : 위와 동일하지만 우측부터 적용됨