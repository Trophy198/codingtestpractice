function solution(phone_number) {
    return "*".repeat(phone_number.length - 4).concat(phone_number.substring(phone_number.length - 4));
}

console.log(solution("01033334444"))