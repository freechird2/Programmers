function solution(n, wires) {
    let graph = {}
    let answer = n

    wires.map((w) => {
        const [x, y] = w
        const xg = graph[x] ? [...graph[x], y] : [y]
        const yg = graph[y] ? [...graph[y], x] : [x]

        graph[x] = xg
        graph[y] = yg
    })

    for (let i = 0; i < wires.length; i++) {
        const [left, right] = wires[i]
        const cnt = new Array(2).fill(1)

        for (let j = 0; j < 2; j++) {
            const x = j == 0 ? left : right
            const y = j == 0 ? right : left
            let queue = graph[x].filter((f) => f !== y)
            let 방문 = {
                [x]: 1,
            }

            while (queue.length > 0) {
                const index = queue.shift()
                방문[index] = 1
                cnt[j]++

                for (let z = 0; z < graph[index].length; z++) {
                    if (방문[graph[index][z]]) continue
                    queue.push(graph[index][z])
                }
            }
        }

        const result = Math.abs(cnt[0] - cnt[1])
        answer = result < answer ? result : answer
    }

    return answer
}
