/**
 * 
 * @param {Array} array 
 * @returns {number}
 */
function countUniqueValues(array) {
    let count = 0;
    let start = array[0];
    for (let i = 0; i < array.length; i++) {
        let pointer = array[i + 1];

        if (start !== pointer) {
            count += 1;
            start = pointer;
        }
    }
    return count;
}

// 상수 또는 O(1) space와 O(n) time으로만 
// 배열의 숫자는 무조건 정렬된 상태
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));

function countUniqueValuesAnswer(arr) {
    if (arr.length === 0) return 0;
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i += 1;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

console.log(countUniqueValuesAnswer([1,2,3,4,4,4,7,7,12,12,13]));