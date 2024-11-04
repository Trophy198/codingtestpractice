/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let start = 0;
    let length = s.length;

    if (length !== goal.length) {
        return false;
    }

    if (s === goal) {
        return true;
    }

    while (start < length) {
        s = s.slice(1) + s[0];
        console.log(s)
        if (s === goal) {
            return true;
        }
        start += 1;
    }

    return false;
};

console.log(rotateString("abcde", "cdeab"));
