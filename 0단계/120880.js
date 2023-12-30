function solution(numList,n) {
   return numList.sort((a, b) => {
        const diffA = Math.abs(n - a);
        const diffB = Math.abs(n - b);

        if(diffA === diffB) {
            return b - a;
        }

        return diffA - diffB;
    });
}

console.log(solution([1, 2, 3, 4, 5, 6],4));

/**
 * 차이가 같으면 내림차순 (b - a)
 */