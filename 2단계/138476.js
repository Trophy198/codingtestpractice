function solution(k, tangerine) {
    const frequencyMap = new Map();
    
    for (let size of tangerine) {
        frequencyMap.set(size,(frequencyMap.get(size) || 0) + 1);
    }

    const sortedFrequencies = Array.from(frequencyMap.values()).sort((a, b) => b - a);

    let count = 0;
    let total = 0;

    for (let freq of sortedFrequencies) {
        total += freq;
        count += 1;
        if (total >= k) {
            break;
        }
    }
    return count;
}

console.log(solution(4,[1, 3, 2, 5, 4, 5, 2, 3]));


/** 귤 고르기
 * k개를 골라 상자 하나에 담아 판매해야함 
 * 수확한 귤의 크기가 일정하지 않으면 보기에 좋지않다고 크기별로 분류했을때 서로 다른 종류의 수를 최소화
 */

/**
function solution(k, tangerine) {
    const frequencyMap = new Map();
    
    for (let size of tangerine) {
        frequencyMap.set(size,(frequencyMap.get(size) || 0) + 1);
    }

    const sortedFrequencies = Array.from(frequencyMap.values()).sort((a, b) => b - a);

    let count = 0;
    let total = 0;

    for (let freq of sortedFrequencies) {
        total += freq;
        count += 1;
        if (total >= k) {
            break;
        }
    }
    return count;
}

console.log(solution(4,[1, 3, 2, 5, 4, 5, 2, 3]));


/** 귤 고르기
 * k개를 골라 상자 하나에 담아 판매해야함 
 * 수확한 귤의 크기가 일정하지 않으면 보기에 좋지않다고 크기별로 분류했을때 서로 다른 종류의 수를 최소화
 */

/**
 * frequencyMap: {1 => 1, 3 => 2, 2 => 2, 5 => 2, 4 => 1}
 * sortedFrequencies: [2, 2, 2, 1, 1]
 * count: 1, total: 2
 * count: 2, total: 4 (여기서 k = 4 이므로 종료)
 * 최종적으로 서로 다른 귤의 종류는 2가지
 */