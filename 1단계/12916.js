function solution(str) {
    let pCount = 0;
    let yCount = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() === "p") pCount++;
        else if (str[i].toLowerCase() === "y") yCount++;
    }
    return pCount === yCount ? true : false;
}