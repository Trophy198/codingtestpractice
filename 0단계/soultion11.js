/** 코드 처리하기 */

function solution(code) {
    var answer = '';
    let mode = 0;
   
    for (let i = 0;i< code.length; i++) {
        
        if(code[i] === '1' && mode == 0) {
            mode = 1;
        }  else if (code[i] === '1' && mode == 1) {
            mode = 0;
        }
        if(mode === 0 && code[i] !== '1' && i%2 === 0) {
            answer += code[i]  
          
          } else if (mode === 1 && code[i] !== '1' && i%2 === 1) {
            answer += code[i]
           
          }
   
    }
    if(answer === '') {
        answer = "EMPTY"
    } 
    return answer;
}
console.log(solution(''))
/** return 하려는 ret가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.
 * 1 ≤ code의 길이 ≤ 100,000
 * code는 알파벳 소문자 또는 "1"로 이루어진 문자열입니다. */