/* 문자열 섞기 */

function solution(str1, str2) {
    str1= 'aaaaa';
    str2='bbbbb';
   
   
    return  [...str1].map((item,index) => item+str2[index]).join("");
}

console.log(solution())