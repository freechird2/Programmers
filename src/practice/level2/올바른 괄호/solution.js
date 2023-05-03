function solution(s) {
    let cnt = 0

    for (let round of s) {
        round === '(' ? cnt++ : cnt--

        if (cnt < 0) return false
    }

    return cnt === 0 ? true : false
}
