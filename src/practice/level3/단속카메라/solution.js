function solution(routes) {
    routes.sort((a, b) => a[1] - b[1])

    let answer = 0
    let last = -30001

    routes.map((r) => {
        if (last < r[0]) {
            last = r[1]
            answer++
        }
    })

    return answer
}
