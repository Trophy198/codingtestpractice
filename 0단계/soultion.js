/* 문자열 겹쳐쓰기 */

function solution(my_string, overwrite_string, s) {
 
    const string = my_string.split("");
 string.splice(s,overwrite_string.length,overwrite_string);
let answer =  string.join('');

     
     return answer;
 }

