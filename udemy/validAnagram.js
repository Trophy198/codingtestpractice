function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const string1 = {};
    for (let value of str1) {
        string1[value] = (string1[value] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        if (string1.hasOwnProperty(str2[i])) {
            string1[str2[i]] = string1[str2[i]] - 1;
        };
    }

    for (let key in string1){
        if (string1[key] !== 0) return false;
    }
    return true;
}

// 목표 : 시간복잡도 제곱 넘지않기
// 빈도 카운터 계산법으로만 해결하기
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false

function validAnagramAnswer(first, second) {

    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];

        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}


console.log(validAnagramAnswer('amanaplanacanalpanama', 'acanalmanplanpamana')); //false