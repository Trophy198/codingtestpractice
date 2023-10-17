function divisors(integer) {
	var array = [];
	for(var i=1; i<=integer; i++) {
		if(integer % i == 0) {
			array.push(i);
		}
	}
	return array;
}

function solution(left,right) {
    let answer = 0;
    let arr = [];
    for(i = left; i <= right; i++) {
        arr.push(divisors(i))
    }
    for(let j = 0; j < arr.length; j++) {
            if(arr[j].length % 2 === 0) {
               answer += arr[j][arr[j].length - 1];
            } else {
                answer -= arr[j][arr[j].length - 1];
            }
    }
    return answer;
}

console.log(solution(24,27));


function solution1(left,right) {
    let answer = 0;
    for(let i = left; i <= right; i++) {
      if(!Number.isInteger(Math.sqrt(i))) {
        answer += i;
      } else {
        answer -= i;
      }
    }
    return answer;
}

console.log(solution1(24,27));

// 문제를 전부다 읽지 않고 푼 내 자신이 문제
// 문제의 의도는 solution1이 맞음