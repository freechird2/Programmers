function solution(keymap, targets) {
    const answer = []
    const map = new Map()

    keymap.map((k) => {
        for (let i = 0; i < k.length; i++) {
            if (map.has(k[i])) map.set(k[i], Math.min(map.get(k[i]), i + 1))
            else map.set(k[i], i + 1)
        }
    })

    targets.map((t) => {
        let count = 0

        for (let i = 0; i < t.length; i++) {
            if (map.has(t[i])) count += map.get(t[i])
            else {
                count = -1
                break
            }
        }

        answer.push(count)
    })

    return answer
}
