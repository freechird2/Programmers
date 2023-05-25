function solution(n, roads, sources, destination) {
    let graph = new Array(n + 1).fill(null).map((_) => [])

    for (let [a, b] of roads) {
        graph[a].push(b)
        graph[b].push(a)
    }

    const visited = new Array(n + 1).fill(Infinity)

    const bfs = (dest) => {
        const queue = [dest]
        visited[dest] = 0

        while (queue.length) {
            const idx = queue.shift()

            for (let g of graph[idx]) {
                if (visited[idx] + 1 < visited[g]) {
                    visited[g] = visited[idx] + 1
                    queue.push(g)
                }
            }
        }
    }

    bfs(destination)

    return sources.map((s, i) => {
        if (visited[s] === Infinity) return -1
        else return visited[s]
    })
}
