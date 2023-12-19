function solution(a,b) {
    const dayArray = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    const dayOfWeek = new Date(`2016-${a}-${b}`).getDay(); 
     
    return dayArray[dayOfWeek];

}

console.log(solution(5,24))