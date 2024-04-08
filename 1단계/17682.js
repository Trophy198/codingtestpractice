function solution(dartResult) {
    let scores = [];
    let currentNum = '';
    
    for (let i = 0; i < dartResult.length; i++) {
      if (!isNaN(dartResult[i])) {
        currentNum += dartResult[i];
      } else {
        let score = parseInt(currentNum);
        currentNum = '';
  
        if (dartResult[i] === 'D') score = Math.pow(score, 2);
        else if (dartResult[i] === 'T') score = Math.pow(score, 3);
  
        if (dartResult[i+1] === '*') {
          score *= 2;
          if (scores.length > 0) {
            scores[scores.length - 1] *= 2;
          }
          i++; 
        } else if (dartResult[i+1] === '#') {
          score *= -1;
          i++;
        }
  
        scores.push(score);
      }
    }
    
    return scores.reduce((a, b) => a + b, 0);
  }

  console.log(solution("1S*2T*3S"));
  