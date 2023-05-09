function solution(progresses, speeds) {
    const answer = []
    const times = []

    progresses.map((p, i) => {
        let time = Math.ceil((100 - p) / speeds[i])
        times.push(time)
    })

    let day = times[0]
    let cnt = 1

    for (let i = 1; i < times.length; i++) {
        if (day >= times[i]) {
            cnt++
        } else {
            answer.push(cnt)
            cnt = 1
            day = times[i]
        }
    }
    answer.push(cnt)

    return answer
}
