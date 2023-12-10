function solution(name, yearning, photo) {
    const scoreMap = name.reduce((map, currentName, index) => {
        map[currentName] = yearning[index];
        return map;
    }, {});

    return photo.map(photoItem => {
        return photoItem.reduce((sum, person) => {
            return sum + (scoreMap[person] || 0);
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