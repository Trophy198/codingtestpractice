function solution(rank, attendance) {
    const students = rank.map((r, i) => ({ rank: r, canAttend: attendance[i], index: i }));
 
    const sortedEligibleStudents = students
        .filter(student => student.canAttend)
        .sort((a, b) => a.rank - b.rank);
    
    const sortedIndices = sortedEligibleStudents.map(student => student.index);
    

    return 10000 * sortedIndices[0] + 100 * sortedIndices[1] + sortedIndices[2];
}

console.log(solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]));
