function solution(prices) {
    let answer = [];
  
    for (let i = 0; i < prices.length; i++) {
      let second = 0;
      for (let j = i + 1; j < prices.length; j++) {
        second += 1;
        if (prices[i] > prices[j]) {
          break;
        }
      }
  
      answer.push(second);
    }
  
    return answer;
  }

console.log(solution([1, 2, 3, 2, 3]));

// 배열의 길이는 초 단위임
/**
 * price[i]가 1일때 j는 2 1 > 2 는 false
 * 다음으로 j는 3이고 1 > 3 은 false
 * 다음으로 j는 2고 1 > 2은 false
 * 다음으로 j는 3이고 1 > 3은 false
 * j는 price.length인 5보다 작아야 하기 때문에 현재까지 초를 배열에 넣음 4
 * price[i]가 2일때 j는 3 2 > 3 false
 * j가 2일때 2 > 2 false
 * j가 3일때 2 > 3 false
 * 현재까지 초를 배열에 넣음 3
 * price[i]가 3일때 
 * j가 2일때 3 > 2 true
 * 현재까지의 초를 배열에 넣음 1
 * price[i]가 2일때
 * j는 3 2 > 3 false
 * 현재까지의 초를 배열에 넣음 1
 * 마지막 price는 3이고 j는 반복문이 끝난시점이니 선언된 second의 값을 넣음 0
 * 총 4초 3초 1초 1초 0초
 */