function solution(players, callings) {
    // 선수들의 이름을 키로, 그들의 인덱스를 값으로 하는 맵 생성
    const playerIndexMap = new Map(players.map((player, index) => [player, index]));

    callings.forEach(calling => {
        // 호출된 선수의 현재 인덱스를 찾음
        const index = playerIndexMap.get(calling);

        // 해당 선수를 한 칸 앞으로 이동 (추월)
        [players[index], players[index - 1]] = [players[index - 1], players[index]];

        // 맵을 업데이트하여 선수들의 새로운 인덱스를 반영
        playerIndexMap.set(calling, index - 1);
        playerIndexMap.set(players[index], index);
    });

    return players;
}
console.log(solution(["mumu", "soe", "poe", "kai", "mine"],["kai", "kai", "mine", "mine"]));