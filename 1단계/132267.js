function solution(a, b, n) {
    let totalCola = 0;
    let currentBottles = n;

    while (currentBottles >= a) {
        let exchangedCola = Math.floor(currentBottles / a) * b; 
        totalCola += exchangedCola; 
        currentBottles = currentBottles - Math.floor(currentBottles / a) * a + exchangedCola; 
    }

    return totalCola;
}

console.log(solution(3, 1, 20));
