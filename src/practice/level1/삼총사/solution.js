function solution(number) {
    const res = []
    let n = number.length

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                res.push(number[i] + number[j] + number[k])
            }
        }
    }

    return res.filter((f) => f === 0).length
}
