function solution(a, b, c, d) {
    // 나온주사위 값을 배열로 변환
    let answer = 0;
    const dice = [a, b, c, d];

    // 모든 주사위 값이 같으면 1111 * a 
    if (new Set(dice).size === 1) {
        return 1111 * a;
    }

    // dice배열에서 각 숫자가 몇번 나오는지 카운트
    const counts = dice.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    

    for (const [num, count] of Object.entries(counts)) {
        // count가 3이면(3개가 같은 숫자), 그 숫자를 10배하여 나머지 숫자와 더한 후 제곱.
        if (count === 3) {
            const others = dice.filter(x => x !== parseInt(num));
            answer = Math.max(answer, Math.pow(10 * parseInt(num) + others[0], 2));
        }
        // count가 2이면(2개가 같은 숫자)
        if (count === 2) {
            const others = dice.filter(x => x !== parseInt(num));
            // 2개가 같은 숫자이지만 size가 2인 경우 (size는 2개가 같은숫자중에서도 두 개씩 같은 값이 나올때)
            if (new Set(others).size === 2) {
                answer = Math.max(answer, others[0] * others[1]);
            }
            // 2개가 같은 숫자이지만 size가 1인경우 (같은숫자가 있지만 나머지숫자가 서로 다를경우를 얘기함)
            if (new Set(others).size === 1) {
                const [p, q] = Object.keys(counts).map(Number);
                answer = Math.max(answer, (p + q) * Math.abs(p - q));
            }
        }
    }

    // 모든 값이 다를 경우 가장 작은값을 반환
    if (new Set(dice).size === 4) {
        answer = Math.min(...dice);
    }

    return answer;
}

const test_cases = [
    [2, 2, 2, 2],
    [4, 1, 4, 4],
    [6, 3, 3, 6],
    [2, 5, 2, 6],
    [6, 4, 2, 5]
];
for (const [a, b, c, d] of test_cases) {
   console.log(solution(a, b, c, d));
}



/**
 * 문제 설명
1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

제한사항
a, b, c, d는 1 이상 6 이하의 정수입니다.
 */


