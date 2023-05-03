function solution(plans) {
    const len = plans.length
    plans.map((p) => {
        const arr = p[1].split(':')

        p[1] = Number(arr[0]) * 60 + Number(arr[1])
        p[2] = Number(p[2])
        p[3] = p[1] + p[2]
    })

    plans.sort((a, b) => a[1] - b[1])

    let time = plans[0][1]
    let thisWork = null
    const job = []
    const answer = []

    while (answer.length < len) {
        if (thisWork && thisWork[3] === time) {
            answer.push(thisWork[0])

            if (job.length) {
                thisWork = job.pop()
                thisWork[1] = time
                thisWork[3] = thisWork[2] + time
            } else {
                thisWork = null
            }
        }

        if (plans.length && time === plans[0][1]) {
            if (thisWork) {
                const remain = thisWork[2] - (time - thisWork[1])
                job.push([thisWork[0], thisWork[1], remain, 0])
            }

            thisWork = plans.shift()
        }

        time++
    }

    return answer
}
