function solution(stones, k) {
    let left = 1
    let right = 200000000

    while (left <= right) {
        const mid = ((left + right) / 2) >> 0
        const copy = stones.slice()
        let count = 0

        for (let c of copy) {
            if (c - mid <= 0) count++
            else count = 0

            if (count >= k) break
        }

        if (count >= k) right = mid - 1
        else left = mid + 1
    }

    return left
}
