function solution(number, limit, power) {
    let answer = 0;
    let divisorCounts = new Array(number + 1).fill(0);

    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            divisorCounts[j]++;
        }
    }

    for (let i = 1; i <= number; i++) {
        let attackPower = divisorCounts[i] > limit ? power : divisorCounts[i];
        answer += attackPower;
    }
    return answer;
}

console.log(solution(10,3,2));

/**
 * 전체 약수의 개수의 순서중 limit 이 넘지않는 경우 그냥 다 더하면 됨
 * 만약 limit의 수치보다 높은 약수가 나오면 해당 약수는 power가 됨
 */


/**
 * 모든 약수를 그때 그때마다 구하여서 효율성이 떨어지면서 시간복잡도가 늘어남 = 시간초과 코드
 */
function solution1(number, limit, power) {
    let answer = 0;
    let array = Array.from({length: number}, (v,i) => i + 1);


    for (let i = 0; i < array.length; i++) {
        if (limit < findDivisor(array[i])) {
            answer += power;
        } else {
            answer += findDivisor(array[i]);
        }
    }

    return answer;
}

function findDivisor(num) {
    let count = 0;
    let divisorArray = [];
    let index = 1;

    while (index <= num) {
        if (num % index === 0) {
            count += 1;
        }
        divisorArray.push(count);
        index += 1;
    }
    return divisorArray;
}