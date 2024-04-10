function solution(park, routes) {
    let startRow = 0;
    let startCol = 0;
    
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === "S") {
                startRow = i;
                startCol = j;
                break;
            }
        }
    }

    let currentRow = startRow;
    let currentCol = startCol;

    const directionVectors = {
        'N': [-1, 0],
        'S': [1, 0],
        'E': [0, 1],
        'W': [0, -1]
    };

    routes.forEach(command => {
        const [dir, distStr] = command.split(" ");
        const dist = parseInt(distStr);
        const [dRow, dCol] = directionVectors[dir];

        let newRow = currentRow + dRow * dist;
        let newCol = currentCol + dCol * dist;

        let pathClear = true;
        for (let step = 1; step <= dist; step++) {
            let stepRow = currentRow + dRow * step;
            let stepCol = currentCol + dCol * step;

            if (stepRow < 0 || stepRow >= park.length || stepCol < 0 || stepCol >= park[0].length) {
                pathClear = false;
                break;
            }
            if (park[stepRow][stepCol] === 'X') {
                pathClear = false;
                break;
            }
        }

        if (pathClear) {
            currentRow = newRow;
            currentCol = newCol;
        }
    });

    return [currentRow, currentCol];
}

console.log(solution(["OSO","OOO","OXO","OOO"],["E 2","S 3","W 1"]))