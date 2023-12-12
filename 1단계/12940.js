function solution(n, m) {
    let arr1 = []
    let arr2 = []
   for(let i = 1; i <= n; i++) {
    if(n % i === 0) {
        arr1.push(i)
    }
   }
   for(let j = 1; j <= m; j++) {
    if(m % j === 0) {
       arr2.push(j)
    }
   }
   let GCD = arr2.reduce((acc,cur) => {
    if(arr1.includes(cur)) {
        return Math.max(acc,cur)
    }
    return acc
   },0)
   let LCM = (n * m) / GCD;
   return [GCD,LCM]
}

console.log(solution(3,12))


// 두 자연수의 곱 = 최대공약수 x 최소공배수
// 유클리드 호제법