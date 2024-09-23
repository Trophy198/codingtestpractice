var minExtraChar = function(s, dictionary) {
    const n = s.length;
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;
    const dictSet = new Set(dictionary);
    
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;
        
        for (let j = 0; j < i; j++) {
            const substring = s.slice(j, i);
            if (dictSet.has(substring)) {
                dp[i] = Math.min(dp[i], dp[j]);
            }
        }
    }

    return dp[n];
};

console.log(minExtraChar("sayhelloworld",["hello", "world"]));