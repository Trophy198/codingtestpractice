function solution(progresses, speeds) {
    let countDays = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let answer = [];
    let currentDay = countDays[0];
    let featuresCount = 1; 

    for (let i = 1; i < countDays.length; i++) {
        if (countDays[i] <= currentDay) {
            featuresCount += 1;
        } else {
            answer.push(featuresCount);
            currentDay = countDays[i];
            featuresCount = 1;
        }
    }
    answer.push(featuresCount);

    return answer;
}

console.log(solution([93, 30, 55],[1, 30, 5]));


/**
 * 첫 번째 기능은 93% 완료되어있지만 하루에 1%씩 작업함 결국 7일간 작업해야함
 * 두번째 기능은 30%가 완료되어있고 하루에 30%씩 작업 결국 3일간 작업
 * 세 번째 기능은 55%가 완료 되어있고 하루에 5%씩 작업이 가능
 */