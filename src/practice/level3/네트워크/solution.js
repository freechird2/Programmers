function solution(n, computers) {
    const answer = []
    const map = new Array(n).fill(null).map((_) => [])

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue

            if (computers[i][j] === 1) map[i].push(j)
        }
    }

    for (let i = 0; i < n; i++) {
        let network = []
        const visited = new Array(n).fill(false)
        const queue = [i]

        visited[i] = true
        network.push(i)

        while (queue.length) {
            const idx = queue.shift()

            for (let newIdx of map[idx]) {
                if (!visited[newIdx]) {
                    visited[newIdx] = true
                    network.push(newIdx)
                    queue.push(newIdx)
                }
            }
        }

        answer.push(network.sort().join(''))
    }

    return [...new Set(answer)].length
}
