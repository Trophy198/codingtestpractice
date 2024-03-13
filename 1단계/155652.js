function solution(s, skip, index) {
    let answer = "";
    let alphabet = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97));
    let validAlphabets = alphabet.filter(ch => !skip.includes(ch));

    for (let ch of s) {
        let currentIndex = validAlphabets.indexOf(ch);
        let newIndex = (currentIndex + index) % validAlphabets.length;
        answer += validAlphabets[newIndex];
    }
    return answer;
}

console.log(solution('aukks','wbqd',5))

/**
 * index 만큼 이동하지만 순환 구조를 위해 % 연산을 사용함
 */