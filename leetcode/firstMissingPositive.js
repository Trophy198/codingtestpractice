/**
 * 
 * @param {number[]} nums
 * @return {number} 
 */
var firstMissingPositive = function(nums) {
    let uniqueNumbers = [...new Set(nums.sort((a, b) => a - b).filter((e) => e > 0))];
    let findNoneNumber = 1;

    for (let i = 0; i < uniqueNumbers.length; i++) {
        if (uniqueNumbers[i] !== findNoneNumber) {
            break;
        }
        findNoneNumber += 1;
    }
    return findNoneNumber;
}

console.log(firstMissingPositive([3,4,-1,1]));