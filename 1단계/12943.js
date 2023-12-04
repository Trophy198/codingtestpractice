function solution(num) {
    let count = 0; 
    function f(n) {
        if (count >= 500) {  
            return -1;
        }   
        if (n === 1) {  
            return count;
        }
        count++;  
        if (n % 2 === 0) {  
            return f(n / 2);
        } else {  
            return f(n * 3 + 1);
        }
    }
    return f(num);
}

function solution1(num) {
    for(let count = 0; count <= 500; count++) {
        if(num === 1) {
            return count;
        }
        if(num % 2 === 0) {
            num /= 2;
        }
        else {
            num = (num * 3 + 1);
        }
    }
    return -1
}

console.log(solution1(626331));
console.log(solution(626331));

// console.log(solution(6));  
// console.log(solution(16));  
// console.log(solution(626331));
