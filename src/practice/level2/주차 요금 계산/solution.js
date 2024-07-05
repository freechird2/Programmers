function solution(fees, records) {
    const cars = {}

    records.map((r) => {
        const s = r.split(' ')
        const t = s[0].split(':')
        const time = Number(t[0]) * 60 + Number(t[1])

        if (!cars[s[1]]) {
            cars[s[1]] = {
                IN: time,
                time: 0,
                fee: false,
            }
        } else {
            if (s[2] === 'IN') {
                cars[s[1]] = {
                    IN: time,
                    time: cars[s[1]].time,
                    fee: false,
                }
            } else {
                cars[s[1]] = {
                    IN: 0,
                    time: cars[s[1]].time + (time - cars[s[1]].IN),
                    fee: true,
                }
            }
        }
    })

    const result = []

    for (let c in cars) {
        if (!cars[c].fee) {
            cars[c].time = cars[c].time + (1439 - cars[c].IN)
        }

        result.push([c, cars[c].time])
    }

    const answer = []

    result
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .map((m) => {
            const f = fees[1] + (m[1] > fees[0] ? Math.ceil((m[1] - fees[0]) / fees[2]) * fees[3] : 0)
            answer.push(f)
        })

    return answer
}
