function solution(seoul) {
    let answer = seoul.findIndex(people => people === "Kim");
    return `김서방은 ${answer}에 있다`
}

console.log(solution(["Jane", "Kim"]))