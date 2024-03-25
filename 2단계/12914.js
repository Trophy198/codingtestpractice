function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let dp = [1,2];

    for (let i = 2; i <=n; i++) {
        dp.push((dp[i-2] + dp[i-1]) % 1234567);
    }
    return dp[n-1];
}

console.log(solution(4));