function solution(cacheSize, cities) {
    var answer = 0
    const cache = Array(cacheSize).fill('')

    if (cacheSize < 1) return cities.length * 5

    cities.map((c) => {
        const cl = c.toLowerCase()
        const io = cache.indexOf(cl)

        if (io > -1) {
            cache.splice(io, 1)
            answer += 1
        } else {
            answer += 5
            cache.shift()
        }

        cache.push(cl)
    })

    return answer
}
