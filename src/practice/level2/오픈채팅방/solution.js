function solution(record) {
    const msg = {
        Enter: '님이 들어왔습니다.',
        Leave: '님이 나갔습니다.',
    }
    const user = {}
    let temp = []
    const answer = []

    for (let i = 0; i < record.length; i++) {
        const [method, id, name] = record[i].split(' ')

        if (method === 'Change') user[id] = name
        else {
            if (method === 'Enter') user[id] = name
            temp.push([id, msg[method]])
        }
    }

    temp.map((t) => {
        answer.push(user[t[0]] + t[1])
    })

    return answer
}
