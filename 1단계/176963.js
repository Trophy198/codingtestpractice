function solution(name, yearning, photo) {
    for(let i = 0; i < photo.length; i++) {
        for(let j = 0; j < photo[i].length; j++) {
           name.forEach((people,index) => {
            if(photo[i][j] === people) {
                photo[i][j] = yearning[index];
            }
        });    
    }
}
return sumNumbersInArray(photo);
}

function sumNumbersInArray(arr) {
    return arr.map(subArray => {
        return subArray.reduce((sum, item) => {
            return sum + (typeof item === 'number' ? item : 0);
        }, 0);
    });
}

console.log(solution(["may", "kein", "kain", "radi"],
[5, 10, 1, 3],
[
["may", "kein", "kain", "radi"],
["may", "kein", "brin", "deny"],
["kon", "kain", "may", "coni"]
]))