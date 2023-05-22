function solution(n, a, b) {
    for (let i = 0; i < n / 2; i++) {
        let ad = parseInt(a / 2)
        let af = a % 2

        let bd = parseInt(b / 2)
        let bf = b % 2

        let aGroup = ad + af
        let bGroup = bd + bf

        if (aGroup === bGroup) {
            return i + 1
        }

        a = af === 0 ? ad : ad + 1

        b = bf === 0 ? bd : bd + 1
    }
}
