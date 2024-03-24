function solution(chicken) {
    let answer = 0;

    while(chicken >= 10) {
        let serviceChicken = Math.floor(chicken / 10);
        answer += serviceChicken;
        chicken = serviceChicken + (chicken % 10);
    }
    
    return answer;
}

console.log(solution(100));