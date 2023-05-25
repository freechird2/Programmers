function solution(genres, plays) {
    const answer = []
    const map = new Map()
    let total = new Map()

    genres.map((g, i) => {
        if (!total.has(g)) {
            total.set(g, plays[i])
        } else {
            total.set(g, total.get(g) + plays[i])
        }

        if (!map.has(g)) {
            map.set(g, [[i, plays[i]]])
        } else {
            const temp = [[i, plays[i]], ...map.get(g).map((m) => [...m])]

            for (let i = 0; i < temp.length - 1; i++) {
                if (temp[i][1] === temp[i + 1][1]) {
                    if (temp[i][0] > temp[i + 1][0]) {
                        const num = temp[i]
                        temp[i] = temp[i + 1]
                        temp[i + 1] = num
                    }
                } else if (temp[i][1] < temp[i + 1][1]) {
                    const num = temp[i]
                    temp[i] = temp[i + 1]
                    temp[i + 1] = num
                }
            }

            map.set(g, temp.slice(0, 2))
        }
    })

    total = [...total].sort((a, b) => b[1] - a[1])

    total.map((t) => {
        answer.push(...map.get(t[0]).map((m) => m[0]))
    })

    return answer
}
