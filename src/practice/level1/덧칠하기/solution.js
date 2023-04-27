function solution(n, m, section) {
    var answer = 0

    const map = new Map()

    for (let i = 1; i <= n; i++) {
        map.set(i, section.includes(i) ? 0 : 1)
    }

    for (let i = 1; i <= n; i++) {
        if (map.get(i) === 0) {
            for (let j = 0; j < m; j++) {
                if (i + j > n) break

                map.set(i + j, 1)
            }

            answer++
        }
    }

    return answer
}
