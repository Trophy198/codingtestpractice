function solution(n) {
   let value = n.toString(3).split('');
   value = value.reverse().join('');
   return Number(parseInt(value,3).toString(10));
}
console.log(solution(45))


//parseInt 확인 필요햇음