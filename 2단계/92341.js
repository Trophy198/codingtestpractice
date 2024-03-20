
/**
 * 주차 요금표 계산
 * @param {*} time 누적 주차 시간(분)
 * @param {*} fees 주차 요금표 [기본시간(분), 기본 요금(원), 단위 시간(분), 단위 요금(원)]
 * @returns 주차 요금
 */
function calculateFee(time, fees) {
    let extraTime = Math.max(0, time - fees[0]);
    let extraFee = Math.ceil(extraTime / fees[2]) * fees[3];
    return fees[1] + extraFee;
}

function solution(fees, records) {
    const parkingRecords = {};

    records.forEach(record => {
        const [time, carNumber, status] = record.split(' ');
        const [hours, minutes] = time.split(':').map(Number);
        const totalMinutes = hours * 60 + minutes;

        if (!parkingRecords[carNumber]) {
            parkingRecords[carNumber] = { totalTime: 0, lastTime: 0, inParking: false };
        }

        if (status === 'IN') {
            parkingRecords[carNumber].lastTime = totalMinutes;
            parkingRecords[carNumber].inParking = true;
        } else {
            parkingRecords[carNumber].totalTime += totalMinutes - parkingRecords[carNumber].lastTime;
            parkingRecords[carNumber].inParking = false;
        }
    });
    
    Object.keys(parkingRecords).forEach(carNumber => {
        if (parkingRecords[carNumber].inParking) {
            parkingRecords[carNumber].totalTime += (23 * 60 + 59) - parkingRecords[carNumber].lastTime;
        }
    });

    const feesCalculated = Object.keys(parkingRecords).sort().map(carNumber => {
        return calculateFee(parkingRecords[carNumber].totalTime, fees);
    });

    return feesCalculated;
}

console.log(solution([180, 5000, 10, 600],["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]));

