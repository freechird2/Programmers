function solution(a, b, n) {
    var answer = 0

    while (n >= a) {
        const d = parseInt(n / a) * b
        answer += d

        n = (n % a) + d
    }

    return answer
}
