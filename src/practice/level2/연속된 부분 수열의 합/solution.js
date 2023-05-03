function solution(sequence, k) {
    let lt = 0,
        rt = 0,
        sum = sequence[0],
        len = 1000001
    let alt = 0,
        art = 0

    while (rt < sequence.length && lt <= rt) {
        if (sum === k) {
            if (rt - lt + 1 < len) {
                alt = lt
                art = rt
                len = rt - lt + 1
            }

            if (rt + 1 < sequence.length) {
                sum += sequence[rt + 1]
            }

            sum -= sequence[lt]
            lt++
            rt++
        }

        if (sum < k) {
            if (rt + 1 < sequence.length) {
                sum += sequence[rt + 1]
            }
            rt++
        } else if (sum > k) {
            sum -= sequence[lt]
            lt++
        }
    }

    return [alt, art]
}
