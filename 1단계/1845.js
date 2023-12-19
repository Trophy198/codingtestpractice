function solution(nums) {
    let poke = new Set(nums);
    if(poke.size > Math.floor(nums.length / 2)) {
        return Math.floor(nums.length / 2);
    } else {
        return poke.size;
    }
}

console.log(solution([3,1,2,3]))