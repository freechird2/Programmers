function solution(queue1, queue2) {
    let sum1 = queue1.reduce((a, b) => a + b, 0)
    let sum2 = queue2.reduce((a, b) => a + b, 0)
    const max = queue1.length + queue2.length
    let [i, j] = [0, 0]
    let answer = 0

    while (sum1 !== sum2) {
        if (sum1 > sum2) {
            sum1 -= queue1[i]
            queue2.push(queue1[i])
            sum2 += queue1[i++]
        } else {
            sum1 += queue2[j]
            queue1.push(queue2[j])
            sum2 -= queue2[j++]
        }

        answer++

        if (i > max || j > max) return -1
    }

    return answer
}
