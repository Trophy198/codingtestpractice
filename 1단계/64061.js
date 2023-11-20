function solution(board, moves) {
    let answer = 0;
    let box = [];

    for(let move of moves) {
        let col = move - 1;
        for(let i = 0; i < board.length; i++) {
            if(board[i][col] !== 0) {
                if(box.length > 0 && box[box.length - 1] === board[i][col]) {
                    box.pop();
                    answer += 1;
                } else {
                    box.push(board[i][col])
                }
                board[i][col] = 0;
                break;
            }
        }
    }
    return answer * 2; 
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]));

/**
 * 스택 큐 문제
 * 처음 시작할때 1빼서 col 만듬
 * 숫지는 0이상 부터 시작해야함( 0은 아무것도 없는 빈칸과 같음 )
 * box의 마지막 요소와 내가 넣을 값과 같으면 해당 요소를 제거
 * 위의 조건이 아니면 box 배열에 값을 추가
 * 이미 쓴 값을 board에서 0으로 설정하고 break(해당열에 첫번째 숫자만 필요함)
 */