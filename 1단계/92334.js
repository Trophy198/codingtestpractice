function solution(id_list, report, k) {
    const users = {};

    report.forEach(r => {
        const [user, reported] = r.split(' ');
        if (!users[reported]) {
            users[reported] = {
                id: reported,
                reportCount: 0,
                reportedBy: new Set()
            };
        }
        if (!users[reported].reportedBy.has(user)) {
            users[reported].reportCount += 1;
            users[reported].reportedBy.add(user);
        }
    });

    const result = new Array(id_list.length).fill(0);

    id_list.forEach((id, idx) => {
        const user = users[id];
        if (user && user.reportCount >= k) {
            user.reportedBy.forEach(reporter => {
                const reporterIdx = id_list.indexOf(reporter);
                if (reporterIdx !== -1) {
                    result[reporterIdx] += 1;
                }
            });
        }
    });

    return result;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2))