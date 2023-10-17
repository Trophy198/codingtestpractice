function solution(str) {
    const regex = /^\d{4}$|^\d{6}$/;
    if(!isNaN(str) && regex.test(str)) {
        return true;
    } else {
        return false;
    }
}

console.log(solution("aa1234"))