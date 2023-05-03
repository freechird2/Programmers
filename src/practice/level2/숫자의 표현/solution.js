function solution(n) {
    let answer = 1

    for (let i = n - 1; i > 0; i--) {
        let total = 0

        for (let j = i; j > 0; j--) {
            total += j

            if (total === n) {
                answer++
                break
            } else if (total + (j - 1) > n) break
        }
    }

    return answer
}
