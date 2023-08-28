function solution(lines) {
    let answer = 0;
    let points = [];
    for (let [start, end] of lines) {
        points.push([start, 'start']);
        points.push([end, 'end']);
    }
    console.log(points);
    points.sort((a, b) => a[0] - b[0] || (a[1] === 'end' ? 1 : -1));

    let count = 0;
    let lastPoint = null;
    for (let [x, type] of points) {
        if (lastPoint !== null && count >= 2) {
            answer += x - lastPoint;
        }
        lastPoint = x;

        if (type === 'start') {
            count++;
        } else {
            count--;
        }
    }
    return answer;
}

console.log(solution([[0, 5], [3, 9], [1, 10]]))


/**
 * 각 선분의 시작점과 끝점을 start,end로 구분  
 * 이때, 시작점과 끝점을 구별하기 위해 start,end 라는 string을 넣어줌. 예시 [0,'start'] [5,'end']
 * 정렬된 점들을 순회하면서 겹치는 선분의 수를 계산. 
 * 시작점을 만날 때마다 겹치는 선분의 수를 1 증가시키고, 끝점을 만날 때마다 1 감소.
 * 두 개 이상의 선분이 겹치는 구간을 찾아 그 길이를 계산.
 */