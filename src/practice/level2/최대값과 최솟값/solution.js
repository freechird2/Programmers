function solution(s) {
    const arr = s.split(' ').map((n) => Number(n))

    return Math.min(...arr) + ' ' + Math.max(...arr)
}
