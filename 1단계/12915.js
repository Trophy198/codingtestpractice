function solution(strings, n) {
    strings.sort();

    strings.sort((a,b) => {
        if(a[n] === b[n]) {
            return 0;
        }
        return a[n] > b[n] ? 1 : -1;
    });
    return strings;
}

console.log(solution(["sun", "bed", "car"],1))