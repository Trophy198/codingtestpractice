function solution(places) {
    let answer = [];
    let N = places.length;
    for(let i = 0; i < N; i++) {
        let isSit = 1;
        for(let x = 0; x < 5; x++) {
            for(let y = 0; y < 5; y++) {
                if(places[i][x][y] === 'P' && !isSafe(places[i], x, y)) {
                    isSit = 0;
                    break;
                }
            }
            if(!isSit) break;
        }
        answer.push(isSit);
    }
    return answer;
}

function isSafe(room, x, y) {
    // 상하좌우 대각선
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1], [2, 0], [0, 2], [-2, 0], [0, -2]];

    for (let [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (isChair(nx,ny) && room[nx][ny] === 'P') {
            // 상하좌우 자리체크
            if(Math.abs(dx) + Math.abs(dy) === 1) {
                return false;
            }
            //대각선 자리체크
            if(Math.abs(dx) === 1 && Math.abs(dy) === 1 && (room[x + dx][y] === 'O' || room[x][y + dy] === 'O')){
                return false;
            }
            // 멘헤튼 거리 ( 2 ) 자리 체크
            if(Math.abs(dx) + Math.abs(dy) === 2 && room[x + Math.floor(dx / 2)][y + Math.floor(dy / 2)] === 'O'){
                return false;
            }
        }
    }
    return true;
}

/** P의 위치가 대각선일때 undefined 가 나오는 것 예방 */
function isChair(x, y) {
    return x >= 0 && x < 5 && y >= 0 && y < 5;
}

console.log(solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], 
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], 
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], 
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], 
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]
]));


/**
 * 각 대기실은 5x5 문자열 배열
 * 좌표에서 상하좌우 대각선 확인, 의자에앉는 사람(P)가 있을떄 좌표 절대값으로 더하면 1 = 바로옆 인접한 자리가 되면안됨
 * 대각선 방향에서도 2칸까지 위치해잇으면 안됨
 * 멘해튼 거리 ( 2 )에 사람잇으면 안됨
 * 파티션(X)을 굳이 따로 찾지않고 바로옆칸이 빈자리일경우 2번째칸이 빈자리일때로 검증
 */