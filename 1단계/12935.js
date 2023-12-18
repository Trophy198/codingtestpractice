function solution(arr) {
    if(arr.length === 1) {
        return [-1]
    }
    let minValue = Number.MAX_SAFE_INTEGER;
    let minValueIndex;
    
    for(let i = 0; i < arr.length; i++) {
        if(minValue > arr[i]) {
            minValue = arr[i]
            minValueIndex = i
        }
    }
    arr.splice(minValueIndex,1)
     return arr;
}


console.log(solution([4,3,2,1]))

function solution1(arr) {
    let answer = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++) {
        answer = Math.min(answer,arr[i])
    }
    if(arr.length === 1) {
        return [-1]
    }
     return arr.filter((element) => element !== answer);
}


console.log(solution1([4,3,2,1]))

function solution2(arr) {
    
    if(arr.length === 1) {
        return [-1]
    }

    const minValue = arr.reduce(
        (minValue, currentValue) => Math.min(minValue, currentValue),
        Number.MAX_SAFE_INTEGER
    );

    return arr.filter(
        (value) => value !== minValue
    );
}


console.log(solution2([4,3,2,1]));
