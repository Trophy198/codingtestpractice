function solution(k, room_number) {
    let answer = [];
    let rooms = new Map();

    function findEmptyRoom(number) {
        if (!rooms.has(number)) {
            rooms.set(number, number + 1);
            return number;
        }

        let next = findEmptyRoom(rooms.get(number));
        rooms.set(number, next + 1);
        return next;
    }

    for (let number of room_number) {
        answer.push(findEmptyRoom(number));
    }

    return answer;
}


console.log(solution(10,[1,3,4,1,3,1]));

// Union-Find 알고리즘