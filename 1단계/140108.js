function solution(s) {
    let count = 0;
    let i = 0;

    while (i < s.length) {
        let x = s[i];
        let xCount = 0; 
        let otherCount = 0;
        let j = i;

        while (j < s.length) {
            if (s[j] === x) {
                xCount++;
            } else {
                otherCount++;
            }

            if (xCount === otherCount) {
                count++;
                break;
            }
            j++;
        }

        if (j === s.length) {
            count++;
            break;
        }

        i = j + 1;
    }

    return count;
}
console.log(solution("banana"));
console.log(solution("abracadabra"));
console.log(solution("aaabbaccccabba")); 
