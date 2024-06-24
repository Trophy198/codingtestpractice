function solution(N, stages) {
    // 스테이지별 실패율을 저장할 객체 초기화
    let failureRates = {};
    
    // 총 플레이어 수
    let totalPlayers = stages.length;

    // 스테이지별로 실패율 계산
    for (let stage = 1; stage <= N; stage++) {
        // 해당 스테이지에 도달했지만 클리어하지 못한 플레이어 수
        let playersAtStage = stages.filter(s => s === stage).length;
        
        // 실패율 계산
        failureRates[stage] = playersAtStage / totalPlayers;
        
        // 현재 스테이지에서 클리어하지 못한 플레이어를 전체 플레이어 수에서 제외
        totalPlayers -= playersAtStage;
    }

    // 실패율을 기준으로 스테이지 정렬 (내림차순)
    let sortedStages = Object.entries(failureRates).sort((a, b) => {
        if (b[1] === a[1]) {
            // 실패율이 같을 경우 스테이지 번호를 기준으로 오름차순 정렬
            return a[0] - b[0];
        } else {
            // 실패율을 기준으로 내림차순 정렬
            return b[1] - a[1];
        }
    }).map(entry => Number(entry[0]));

    return sortedStages;
}

console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]))


/**
 * 실패율은 다음과 같이 정의한다.
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
전체 스테이지의 개수 N
게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
 */

/**
 * 5개의 스테이지가 있을때
 * 각 사용자가 스테이지에 머물러 있는 곳 2,1,2,6,2,4,3,3 즉 아직 해당 단계를 해결하지 못하여 실패율로 담김
 * 전체 8명중에 1스테이지를 못깬사람이 8명중 1명 // 현재 인원수에서 해당 스테이지를 못깬만큼 현재인원을 줄임 8 - 1
 * 7명중 2스테이지를 못깬사람이 7명중 3명 // 현재 인원수에서 해당 스테이지를 못깬만큼 현재인원을 줄임 7 - 3
 * 4명중 3스테이지를 못깬사람이 4명중 2명 // 현재 인원수에서 해당 스테이지를 못깬만큼 현재인원을 줄임 4 - 2
 * 2명중 4스테이지를 못깬사람이 2명중 1명 // 현재 인원수에서 해당 스테이지를 못깬만큼 현재인원을 줄일 2 - 1
 * 1명중 5스테이지를 못깬 사람은 없음 0
 * 6은 마지막 스테이지까지 깬사람 // 제외
 */



/**
 * 4개의 스테이지가 있을때
 * 1~3 스테이지를 못깬사람은 없음 0
 * 총 5명중 4스테이지를 못깬사람은 5명중 5명
 */