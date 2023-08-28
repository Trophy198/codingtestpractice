function solution(board) {
    let n = board.length;
    let safeZoneCount = 0;
    let visited = Array.from(Array(n), () => Array(n).fill(false));
    let dx = [0, 0, -1, 1, -1, -1, 1, 1];
    let dy = [-1, 1, 0, 0, -1, 1, -1, 1];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                visited[i][j] = true;
                for (let k = 0; k < 8; k++) {
                    let nx = i + dx[k];
                    let ny = j + dy[k];
                    if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny]) {
                        visited[nx][ny] = true;
                    }
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j]) safeZoneCount++;
        }
    }

    return safeZoneCount;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]));


/**
board의 크기인 n과 안전 영역의 수를 저장할 safeZoneCount 변수를 초기화
방문 여부를 체크하기 위한 visited 배열을 생성하고 모든 값을 false로 초기화
다음으로, 상하좌우 및 대각선 방향을 나타내는 두 개의 배열 dx, dy를 생성
이후 보드 전체를 순회하는 이중 for문 실행
각 위치에서, 값이 1인 경우 해당 위치와 주변 8방향 모두 방문한 것으로 처리(visited[i][j] = true)
다시 한번 보드 전체를 순회하여 아직 방문하지 않은(즉, 안전 영역에 속하는) 위치의 수를 세어 반환
 */



// 힌트 보기 구간

/**
dx와 dy 배열은 2차원 그리드에서 현재 위치를 기준으로 상하좌우 및 대각선 방향을 나타내는 데 사용됩니다.

dx는 x축(수평 방향)의 변화를 나타냅니다. 0은 수평 방향으로 이동하지 않음을 의미하고, -1은 왼쪽으로 한 칸 이동함을 의미하고, 1은 오른쪽으로 한 칸 이동함을 의미합니다.
dy는 y축(수직 방향)의 변화를 나타냅니다. -1은 위로 한 칸 이동함을 의미하고, 1은 아래로 한 칸 이동함을 의미합니다.
따라서 dx[k], dy[k] (k=0~7)는 다음과 같이 각각 8개의 서로 다른 방향을 나타냅니다:

k=0: 왼쪽
k=1: 오른쪽
k=2: 위
k=3: 아래
k=4: 왼쪽 위 대각선
k=5: 오른쪽 위 대각선
k=6: 왼쪽 아래 대각선
k=7: 오른쪽 아래 대각선
이렇게 하면 현재 위치 (i, j)에서 특정 방향 k로 한 칸 이동한 위치를 (i + dx[k], j + dy[k])로 쉽게 계산할 수 있습니다.

 */