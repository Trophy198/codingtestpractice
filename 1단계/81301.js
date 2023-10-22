function solution(str) {
    let mapping = {
        'zero': '0',
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    }
    for(let word in mapping) {
        let regex = new RegExp(word, 'g');
        str = str.replace(regex, mapping[word]);
    }

    return parseInt(str);
}

console.log(solution("one4seveneight"))