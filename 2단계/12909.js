function solution(s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}


console.log(solution(")()("))
// 시간초과 나왔음

/**
 * 현재 문자가 왼쪽 괄호 '(' 일 경우, 스택에 푸시
 * 현재 문자가 오른쪽 괄호 ')' 일 경우, 스택이 비어있는지 확인
 * 스택이 비어있다면, 닫는 괄호에 해당하는 여는 괄호가 없으므로 false를 반환
 * 스택이 비어있지 않다면, 스택에서 팝하여 여는 괄호 제거
 * 모든 문자를 처리한 후 스택이 비어있는지 확인
 * 스택이 비어있다면 모든 괄호가 제대로 짝을 이루었다는 것이므로 true를 반환
 * 스택에 요소가 남아있다면, 짝이 맞지 않는 여는 괄호가 있다는 것이므로 false를 반환
 */


function solution1(s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            result += 1;
        } else {
            if (result === 0) {
                return false;
            }
            result -= 1;
        }
    }

    return result === 0;
}


console.log(solution1(")()(")); 

// 통과
// 해당 문제에서는 극단적으로 스택의 크기가 커져서 효율성 테스트에서 통과하려면 열린 괄호가 나타날때마다 카운트수 증가 닫힌 괄호는 카운터 수 감소