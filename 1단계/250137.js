// 초당 회복하면서, 시전시간때 초당회복 + 추가회복 

function solution(bandage, health, attacks) {
    // 초기 체력 설정
    let totalHealth = health;
    // 시간초 초기화
    let time = 0;
    // 초당 회복량
    let recoveryPerSec = bandage[1];
    // 시전 시간
    let coolTime = bandage[0];
    // 추가 회복량
    let extraRecovery = bandage[2];
    // 연속 성공 시간
    let successTime = 0;
    // 현재 처리 중인 공격 인덱스
    let attackIndex = 0;

    // 게임 시간을 1초씩 진행하며 처리
    for (time = 1; time <= attacks[attacks.length - 1][0]; time++) {
        // 현재 공격이 있는지 확인
        if (attackIndex < attacks.length && attacks[attackIndex][0] === time) {
            // 공격 받음
            totalHealth -= attacks[attackIndex][1];
            attackIndex += 1;
            // 기술이 취소되므로 연속 성공 시간 초기화
            successTime = 0;

            // 체력이 0 이하가 되면 캐릭터는 죽음
            if (totalHealth <= 0) {
                return -1;
            }
        } else {
            // 공격이 없을 경우 회복 시도
            totalHealth += recoveryPerSec;
            successTime += 1;

            // 연속 성공 시간이 시전 시간 이상이면 추가 회복
            if (successTime >= coolTime) {
                totalHealth += extraRecovery;
                successTime = 0; // 추가 회복 후 연속 성공 시간 초기화
            }

            // 체력은 최대 체력을 넘지 않음
            if (totalHealth > health) {
                totalHealth = health;
            }
        }
    }

    // 최종 체력 반환
    return totalHealth;
}


console.log(solution([5, 1, 5],30,[[2,10],[9,15],[10,5],[11,5]]));





/** [PCCP 기출문제] 1번 / 붕대 감기
 * 어떤 게임에는 붕대 감기라는 기술이 있음
 * 붕대 감기는 t 초 동안 붕대를 감으며서 1초마다 x 만큼의 체력을 회복함
 * t초 연속으로 붕대를 감는 데 성공한다면 y 만큼의 체력을 추가로 회복합니다.
 * 게임 캐릭터에는 최대 체력이 존재해 현재 체력이 최대 체력보다 커지는 것은 불가능
 * 
 * 기술을 쓰는 도중 몬스터에게 공격을 당하면 기술이 취소되고, 공격을 당하는 순간에는 체력을 회복할 수 없음
 * 몬스터에게 공격당해 기술이 취소당하거나 기술이 끝나면 그 즉시 붕대 감기를 다시 시용하여, 연속 성공 시간이 0 으로 초기화
 * 몬스터의 공격을 받으면 정해진 피해량 만큼 현재 체력이 줄어듬
 * 이때, 현재 체력이 0 이하가 되면 캐릭터가 죽으며 더 이상 체력을 회복할 수 없음
 * 
 * 나는 붕대감기 기술의 정보, 캐릭터가 가진 최대 체력과 몬스터의 공격 패턴이 주어질 때 캐릭터가 끝까지 생존할 수 있는지 궁금
 * 
 * 붕대 감기 기술의 시전 시간, 1초당 회복량, 추가 회복량을 담은 1차원 정수 배열 bandage와 최대 체력을 의미하는 정수 health
 * 몬스터의 공격 시간과 피해량을 담은 2차원 정수 배열 attacks가 매개변수로 ㅜ어짐
 * 모든 공격이 끝난 직후 남은 체력을 return 해야함
 * 만약 몬스터의 공격을 받고 캐릭터의 체력이 0 이하가 되어 죽는다면 -1 return 함
 * bandage의 0번째 인덱스는 시전시간(t),
 * bandage의 1번째 인덱스는 초당 회복량(x)
 * bandage의 2번째 인덱스는 추가 회복량(y)
 * 
 * attacks에서 [공격 시간, 피해량] 형태의 길이가 2인 정수 배열을 줌
 * 오름차순 되있고, 공격 시간은 모두 다름
 * 
 */