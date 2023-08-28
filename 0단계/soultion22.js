function solution(n) {
   
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    
    let x = 0, y = 0;
    let num = 1;
    let dx = 0, dy = 1;  
    
    for (let i = 0; i < n * n; i++) {
        matrix[x][y] = num;
        num++;       
        if (
            x + dx < 0 || x + dx >= n ||
            y + dy < 0 || y + dy >= n ||
            matrix[x + dx][y + dy] !== 0
        ) {
            [dx, dy] = [dy, -dx];
        }
        x += dx;
        y += dy;
    }
    
    return matrix;
}


console.log(solution(4))


