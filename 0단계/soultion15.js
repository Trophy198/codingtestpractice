/** 이어 붙인 수 */
function solution(num_list) {
    var answer = 0;
    let acc = [];
    let cur = [];
    for(let i = 0; i< num_list.length; i ++) {
      if(num_list[i] % 2 === 0) {
        acc.push(num_list[i])
      } else if (num_list[i] % 2 === 1) {
        cur.push(num_list[i])
      }
    }
    answer = (Number(acc.join("")) + Number(cur.join("")))
    return answer;
}
console.log(solution([3,4,5,2,1]))