function solution(n, t, m, p) {
    var answer = ''
    let num = 0
    let cnt = 1
    const order = m === p ? 0 : p

    while (answer.length < t) {
        const temp = num.toString(n).toUpperCase()

        for (let i = 0; i < temp.length; i++) {
            if (cnt % m === order) {
                answer += temp[i]
            }

            cnt++
        }

        num++
    }

    return answer.slice(0, t)
}
