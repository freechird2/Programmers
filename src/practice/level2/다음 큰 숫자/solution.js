function solution(n) {
    var answer = 0
    let count = n
        .toString(2)
        .split('')
        .filter((i) => i === '1').length

    while (true) {
        n += 1

        if (
            n
                .toString(2)
                .split('')
                .filter((i) => i === '1').length === count
        ) {
            return n
        }
    }

    return answer
}
