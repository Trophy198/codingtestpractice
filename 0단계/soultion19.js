function solution(babbling) {
    var answer = 0;
    
    for(let i=0; i<babbling.length; i++){
        let word = babbling[i];
        

        let ayaCount = (word.match(/aya/g) || []).length;
        let yeCount = (word.match(/ye/g) || []).length;
        let wooCount = (word.match(/woo/g) || []).length;
        let maCount = (word.match(/ma/g) || []).length;


        let restCharsCount = word.replace(/aya|ye|woo|ma/g, '').length;

        
        if(ayaCount <= 1 && yeCount <= 1 && wooCount <= 1 && maCount <= 1 && restCharsCount == 0){
            answer++;
        }
    }

    return answer;
}



console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]))

/* 
 * 제한사항
1 ≤ babbling의 길이 ≤ 100
1 ≤ babbling[i]의 길이 ≤ 15
babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장합니다.
문자열은 알파벳 소문자로만 이루어져 있습니다.
 */