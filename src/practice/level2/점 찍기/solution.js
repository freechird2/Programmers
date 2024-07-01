function solution(k, d) {
    let answer = 0

    for (let i = 0; i <= d; i += k) {
        answer += Math.floor(getDistance(d, i) / k) + 1
    }

    return answer
}

function getDistance(d, x) {
    return Math.floor(Math.sqrt(Math.abs(d * d) - Math.abs(x * x)))
}
