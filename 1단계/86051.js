function solution(numbers) {
    let number = new Array(10).fill().map((v,i) => i);
    let count = number.reduce((acc,cur) => {
        if(!numbers.includes(cur)) {
            return acc += cur
        }
        return acc;
    },0)
    return count;
}

console.log(solution([1,2,3,4,6,7,8,0]))