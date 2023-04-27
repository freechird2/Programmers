function solution(id_list, report, k) {
    var answer = []
    let users = {}
    let re_list = {}
    const badUser = []

    id_list.map((i) => {
        users[i] = []
    })

    for (let r of report) {
        const user = r.split(' ')

        if (users[user[0]].includes(user[1])) continue

        users[user[0]].push(user[1])

        if (!re_list[user[1]]) re_list[user[1]] = 1
        else re_list[user[1]] = re_list[user[1]] + 1
    }

    for (let r in re_list) {
        if (re_list[r] >= k) badUser.push(r)
    }

    for (let u in users) {
        let cnt = 0

        badUser.map((b) => {
            if (users[u].includes(b)) cnt++
        })

        answer.push(cnt)
    }

    return answer
}
