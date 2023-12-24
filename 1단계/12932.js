function solution(n) {
    const str = String(n);
    const mapfn = (arg) => Number(arg);
    const newArr = str.split('').map(mapfn);
    console.log(newArr)
return newArr.reverse()
}

console.log(solution(12375))