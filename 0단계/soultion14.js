/** 원소들의 곱과 합 */

function solution(num_list) {
    let answer = 0;
    
const sumWithInitial = num_list.reduce((acc, cur) => acc * cur);
const sumWithInitial2 = num_list.reduce((acc, cur) => acc + cur);
if(sumWithInitial < sumWithInitial2 ** 2) {
    answer = 1
} else answer = 0
    return answer;
}

console.log(solution([5,7,8,3]))