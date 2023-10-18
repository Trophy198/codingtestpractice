function solution(str) {
    let arr = str.split(' ');
    let maxValue = Number.MIN_SAFE_INTEGER;
    let minValue = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++) {
        maxValue = Math.max(maxValue,Number(arr[i]));
        minValue = Math.min(minValue,Number(arr[i]));
    }
    return `${minValue}` + ' ' + `${maxValue}`;
}

console.log(solution("-1 -2 -3 -4"))