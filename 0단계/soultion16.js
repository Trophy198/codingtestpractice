/** 마지막 두 원소 */
function solution(num_list) {
    var answer = [];

   if(num_list[num_list.length - 1] > num_list[num_list.length - 2]) {
   num_list.push(num_list[num_list.length -1] - num_list[num_list.length - 2])
   answer = num_list

   } else
    num_list.push(num_list[num_list.length -1] * 2)
   answer = num_list
   
    return answer;
}

console.log(solution([5,2,1,5,6]))

// 마지막 원소에서 그 앞에 원소를 빼는거였음