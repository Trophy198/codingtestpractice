
/**
 * 
 * @param {number} num 
 * @return {string}
 */
var intToRoman = function(num) {
    let symbols = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];
    let answer = "";

for (let [symbol, value] of symbols) {
    while (num >= value) {
        answer += symbol;
        num -= value;
    }
}
return answer;

}

console.log(intToRoman(3749))