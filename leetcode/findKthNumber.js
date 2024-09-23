function solution(n, k) {
    // 현재 숫자에서 다음 숫자 까지의 몇 개의 숫자가 있는지 카운트 해주기
    const countSteps = (curr, next, n) => {
        let steps = 0;
        // curr 이 n 이하인 동안 자식 노드를 따라가면서 숫자 갯수 세기
        while (curr <= n) {
            // 현재 노드에서 다음 노드까지의 범위에서 존재하는 숫자 더하기
            steps += Math.min(n + 1, next) - curr;
            // 트리 구조에서 자식 노드로 이동
            curr *= 10;
            next *= 10;
        }

        return steps;
    }

    let curr = 1;
    k -= 1;

    while (k > 0) {
        let steps = countSteps(curr, curr + 1, n);
        if (steps <= k) {
            curr += 1;
            k -= steps;
        } else {
            curr *= 10;
            k -= 1;
        }
    }

    return curr;
}

console.log(solution(13, 2));


/**
 * n이 13이고 k 가 2면
 * 숫자 1에서 2까지의 사전순 숫자 수는 5개고
 * 자식 노드로 이동하면 10, 남은 k는 0
 * k번째 숫자는 10이됨
 */