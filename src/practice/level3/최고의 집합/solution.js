function solution(n, s) {
    const share = (s / n) >> 0

    if (!share) return [-1]

    const rest = s % n
    const arr = new Array(n).fill(share)

    for (let i = 0; i < rest; i++) {
        arr[i + 1]++
    }

    return arr.sort()
}
