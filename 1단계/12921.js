function solution(n) {
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
}


console.log(solution(10));

/**
 * 에라토스테네스의 체
 * 밀러-라빈 - 이 판별법도 생각해 봤을 때 N의 소수판별엔 가장 빠른것 같음
 */