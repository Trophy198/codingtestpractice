function solution(arr, k) {
    let set = new Set(arr);
    let array = [...set];
    let result = array.slice(0,k);
    while (result.length < k) {
        result.push(-1);
    }
    return result;
}

console.log(solution([0, 1, 1, 2, 2, 3],3))