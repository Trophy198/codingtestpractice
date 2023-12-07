function solution(food) {
    let answer = "";
    for(let i = 0; i < food.length; i++) {
       answer += String(i).repeat(Math.floor(food[i] / 2))
    }
    let reverse = answer.split("").reverse().join("");
    return answer + "0" + reverse;
}

console.log(solution([1, 3, 4, 6]))