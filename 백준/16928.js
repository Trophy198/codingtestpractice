const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    let firstLine = input[0].split(' ').map(Number);
    let N = firstLine[0];
    let M = firstLine[1];
    
    let board = Array.from({length: 101}, (_, i) => i);
    
    for(let i = 1; i <= N; i++) {
        let [x, y] = input[i].split(' ').map(Number);
        board[x] = y;
    }
    
    for(let i = N+1; i <= N+M; i++) {
        let [u, v] = input[i].split(' ').map(Number);
        board[u] = v;
    }
    
    let visited = Array(101).fill(false);
    let queue = [];

    queue.push({position: 1, count: 0});
    visited[1] = true;
    
    let answer = -1;
    
    while(queue.length > 0) {
        let current = queue.shift();
        let pos = current.position;
        let cnt = current.count;
        
        if(pos === 100){
            answer = cnt;
            break;
        }
        
        for(let dice = 1; dice <= 6; dice++) {
            let nextPos = pos + dice;
            
            if(nextPos > 100) continue; 
            
            if(board[nextPos] !== nextPos){
                nextPos = board[nextPos];
            }
            
            if(!visited[nextPos]){
                visited[nextPos] = true;
                queue.push({position: nextPos, count: cnt + 1});
            }
        }
    }
    
    console.log(answer);
});