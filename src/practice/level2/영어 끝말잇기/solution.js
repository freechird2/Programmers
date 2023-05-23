function solution(n, words) {
    const map = new Map()
    let last = ''
    let cnt = 1

    while (words.length) {
        const w = words.shift()

        if (!map.has(w)) {
            map.set(w, 1)
        } else {
            let temp = cnt % n

            return [temp === 0 ? n : temp, Math.ceil(cnt / n)]
        }

        if (last && last !== w.charAt(0)) {
            let temp = cnt % n

            return [temp === 0 ? n : temp, Math.ceil(cnt / n)]
        } else {
            last = w.charAt(w.length - 1)
        }

        cnt++
    }

    return [0, 0]
}
