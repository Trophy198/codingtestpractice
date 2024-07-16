function solution(array, height) {
    // 키가 큰 사람수를 초기화
    let count = 0;
    // 반 친구들을 나열하기
    array.forEach(h => {
        // 반 친구들중 머쓱이보다 키가 큰 사람(height 보다 큰사람) 찾기
        if (h > height) {
            // 키카 큰 사람을 찾았으면 그만큼 숫자 세기
            count += 1;
        }
    }) 
    // 키가 큰 사람수를 센 count를 반환하기
    return count;
}

console.log(solution([149, 180, 192, 170],167));

/**
 * 학교에서 키 순으로 줄을 설 때 몇번째로 서야 하는지 궁금해짐
 * 반 친구들의 키가 담긴 정수 배열과 키가 매개변수로 주어짐
 * 머쓱이보다 키 큰 사람수를 return
 */