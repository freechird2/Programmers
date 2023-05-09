function solution(priorities, location) {
    const map = new Map()
    const process = Array.from({ length: priorities.length }, (v, i) => String.fromCharCode(i + 65))

    for (let i = 0; i < priorities.length; i++) {
        if (map.has(priorities[i])) map.set(priorities[i], map.get(priorities[i]) + 1)
        else map.set(priorities[i], 1)
    }

    let cnt = 0

    while (process.length) {
        let p = process.shift()
        const prior = priorities.shift()

        for (let item of map) {
            const [k, v] = item

            if (k > prior && v > 0) {
                process.push(p)
                priorities.push(prior)
                p = null
                break
            }
        }

        if (p) {
            cnt++

            if (p.charCodeAt(0) - 65 === location) return cnt

            map.set(prior, map.get(prior) - 1)
        }
    }
}
