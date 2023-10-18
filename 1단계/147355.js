function solution(t,p) {
    let pLength = p.length;
    let count = 0;
    for(let i = 0; i < t.length; i++) {
      if(t.slice(i,i+pLength) <= p && t.slice(i,i+pLength).length === pLength) {
        count++
      }
    }
return count
}

console.log(solution("3141592","271"));


function solution1(t,p) {
    let tLength = t.length;
    let pLength = p.length;
    let count = 0;
    for(let i = 0; i <= tLength - pLength; i++) {
      if(t.slice(i,i+pLength) <= p) {
        count++;
      }
    }
return count;
}

console.log(solution1("3141592","271"));