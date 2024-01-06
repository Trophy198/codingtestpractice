function solution(ingredient) {
    let count = 0;
    let stack = [];
    for(let x of ingredient) {
        stack.push(x);
        if(stack.slice(-4).join('') === '1231') {
            stack.splice(-4);
            count += 1;
        }
    }
    return count;
}


console.log(solution([1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]));

/**
 * 1 = 빵
 * 2 = 야채
 * 3 = 고기
 * 
 * 스택 문제 - 재료들을 stack에 하나씩 담으면서 stack에 있는값이 1231과 일치하면 count를 증가시키고 stack에서 완성된 햄버거를('1231')을 삭제
 */