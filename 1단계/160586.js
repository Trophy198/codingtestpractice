function solution(keymap,targets) {
    let answer = [];
    let keyInfo = [];
    for(let i = 0; i < keymap.length; i++) {
        for(let j = 0; j < keymap[i].length; j++) {
            if (!keyInfo[keymap[i][j]]) {
                keyInfo[keymap[i][j]] = [];
            }

            keyInfo[keymap[i][j]].push(j+1);
        }
    }
    for(let target of targets) {
        let count = 0;
        for(let char of target) {
            if(!keyInfo[char]) {
                count = -1;
                break;
            } else {
                count += Math.min(...keyInfo[char]);
            }
        }
        answer.push(count);
    }
    return answer;
}

console.log(solution([["ABACD", "BCEFD"],["ABCD","AABB"]]));