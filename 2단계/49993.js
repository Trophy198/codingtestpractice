function solution(skill, skill_trees) {
    let answer = 0;
    
    skill_trees.forEach(tree => {
        // 현재 스킬트리에서 skill에 있는 문자들만 추출
        let filteredTree = tree.split('').filter(s => skill.includes(s)).join('');
        console.log(filteredTree)
        
        // 추출된 스킬들의 순서가 주어진 skill 순서의 시작과 맞는지 확인
        if (skill.startsWith(filteredTree)) {
            answer += 1;
        }
    });
    
    return answer;
}


console.log(solution("CBD",["BACDE", "CBADF", "AECB", "BDA"]));

/** 스킬트리
 * 단순 순서만 따지기
 * 현재 스킬트리에서 skill에 있는 문자들만 추출하면 BCD, CBD, CB, BD
 * 추출한 스킬들읋 주어진 skill의 순서의 시작과 맞는지 확인
 */