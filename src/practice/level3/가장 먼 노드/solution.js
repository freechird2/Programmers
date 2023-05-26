function solution(n, edge) {
    const graph = new Array(n + 1).fill(null).map((_) => [])

    for (let e of edge) {
        const [a, b] = e

        graph[a].push(b)
        graph[b].push(a)
    }

    const visited = new Array(n + 1).fill(0)
    const queue = [1]
    visited[1] = 1

    while (queue.length) {
        const idx = queue.shift()

        for (let newIdx of graph[idx]) {
            if (!visited[newIdx]) {
                visited[newIdx] = visited[idx] + 1
                queue.push(newIdx)
            }
        }
    }

    const max = Math.max(...visited)

    return visited.filter((v) => v === max).length
}
