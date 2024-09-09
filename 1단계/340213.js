// 시간 문자열을 초로 변환하는 함수 ("mm:ss" -> 초 단위)
function timeToSeconds(time) {
    const [mm, ss] = time.split(':').map(Number);
    return mm * 60 + ss;
}

// 초 단위를 시간 문자열로 변환하는 함수 (초 -> "mm:ss")
function secondsToTime(seconds) {
    const mm = Math.floor(seconds / 60).toString().padStart(2, '0');
    const ss = (seconds % 60).toString().padStart(2, '0');
    return `${mm}:${ss}`;
}

// 현재 위치에서 10초 전으로 이동하는 함수
function movePrev(currentPosSec) {
    return Math.max(0, currentPosSec - 10); // 10초 전으로 이동, 최소 0초까지
}

// 현재 위치에서 10초 후로 이동하는 함수
function moveNext(currentPosSec, videoLenSec) {
    return Math.min(videoLenSec, currentPosSec + 10); // 10초 후로 이동, 최대 비디오 길이까지
}

// 오프닝 구간에 있으면 오프닝 끝으로 이동하는 함수
function skipOpeningIfInRange(currentPosSec, opStartSec, opEndSec) {
    if (currentPosSec >= opStartSec && currentPosSec <= opEndSec) {
        return opEndSec; // 오프닝 구간이면 오프닝 끝으로 이동
    }
    return currentPosSec; // 오프닝 구간이 아니면 현재 위치 그대로 유지
}

function solution(video_len, pos, op_start, op_end, commands) {
    // 입력값을 초 단위로 변환
    const videoLenSec = timeToSeconds(video_len);
    let currentPosSec = timeToSeconds(pos);
    const opStartSec = timeToSeconds(op_start);
    const opEndSec = timeToSeconds(op_end);

    // 오프닝 구간에 시작 위치가 있다면 바로 오프닝 끝으로 이동
    currentPosSec = skipOpeningIfInRange(currentPosSec, opStartSec, opEndSec);

    // 주어진 명령어 처리
    for (const command of commands) {
        if (command === 'prev') {
            currentPosSec = movePrev(currentPosSec); // 10초 전으로 이동
        } else if (command === 'next') {
            currentPosSec = moveNext(currentPosSec, videoLenSec); // 10초 후로 이동
        }

        // 명령 후에도 다시 오프닝 구간에 있는지 확인하고 필요시 건너뜀
        currentPosSec = skipOpeningIfInRange(currentPosSec, opStartSec, opEndSec);
    }

    // 최종 위치를 "mm:ss" 형식으로 변환하여 반환
    return secondsToTime(currentPosSec);
}

console.log(solution("34:33","13:00","00:55","02:55",["next", "prev"],"13:00"))