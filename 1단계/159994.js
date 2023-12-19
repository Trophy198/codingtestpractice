function solution(cards1, cards2, goal) {
    let index1 = 0;
    let index2 = 0;
    for (let word of goal) {
        if (cards1[index1] === word) {
            index1 += 1;
        } else if (cards2[index2] === word) {
            index2 += 1;
        } else {
            return "No";
        }
    }
    return "Yes";
}

console.log(solution(["i", "water", "drink"],["want", "to"],["i", "want", "to", "drink", "water"]))

