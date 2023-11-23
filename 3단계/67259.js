function solution(board) {
    const N = board.length;
    const cost = Array.from({length: N}, () => Array.from({length: N}, () => Array(4).fill(Infinity)));
    const queue = [];

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    /** 갈수있는 4방향 초기 비용 설정 */
    for (let i = 0; i < 4; i++) {
        const nx = dx[i];
        const ny = dy[i];
        if (nx >= 0 && ny >= 0 && nx < N && ny < N && board[nx][ny] === 0) {
            cost[nx][ny][i] = 100;
            queue.push([nx, ny, i, 100]);
        }
    }


    while (queue.length > 0) {
        const [x, y, direction, finalCost] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && ny >= 0 && nx < N && ny < N && board[nx][ny] === 0) {
                let newCost = finalCost + (direction === i ? 100 : 600);

                if (cost[nx][ny][i] > newCost) {
                    cost[nx][ny][i] = newCost;
                    queue.push([nx, ny, i, newCost]);
                }
            }
        }
    }
    /** 네 방향중에 최솟값 */
    return Math.min(...cost[N - 1][N - 1]);
}

console.log(solution([
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 0, 0]]))