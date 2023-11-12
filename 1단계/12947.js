function solution(x) {
    const str = String(x);
    const mapfn = (arg) => Number(arg);
    const sumNumber = str.split('').map(mapfn).reduce((acc,cur) => acc + cur);
    if(x % sumNumber === 0)  return true;
    else return false;
}

console.log(solution(11))