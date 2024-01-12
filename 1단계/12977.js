function solution(nums) {
    let count = 0;
    let arrLength = nums.length;
    for(let i = 0; i < arrLength; i++) {
        for(let j = i + 1; j < arrLength; j++) {
            for(let k = j+1; k < arrLength; k++) {
               if(isPrime(nums[i] + nums[j] + nums[k])) {
                count += 1;
                }
            }
        }
    }
    return count;
}

function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(solution([1,2,3,4]));