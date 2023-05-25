function solution(n, stations, w) {
    let answer = 0
    const coverage = w * 2 + 1

    const endPoint = stations.reduce((acc, cur) => {
        const apart = cur - w - 1 - acc

        answer += apart > 0 ? parseInt((apart - 1) / coverage) + 1 : 0
        return cur + w
    }, 0)

    if (n > endPoint) answer += parseInt((n - endPoint - 1) / coverage) + 1

    return answer
}
