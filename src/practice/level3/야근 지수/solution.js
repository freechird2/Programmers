function solution(n, works) {
    works = works.sort((a, b) => b - a)

    while (works[0] > 0 && n > 0) {
        let max = works[0]

        for (let i = 0; i < works.length; i++) {
            if (works[i] !== max) break

            works[i]--
            n--

            if (n === 0) break
        }
    }

    return works.reduce((acc, cur, i) => {
        return (acc += cur * cur)
    }, 0)
}
