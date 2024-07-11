function solution(prices) {
    const queue = []
    const answer = new Array(prices.length).fill(-1)

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] > prices[i + 1]) {
            answer[i] = 1

            let cnt = 1
            while (queue.length) {
                if (answer[i - cnt] === -1) {
                    if (queue[queue.length - 1] > prices[i + 1]) {
                        queue.pop()
                        answer[i - cnt] = cnt + 1
                    } else {
                        break
                    }
                }
                cnt++
            }
        } else {
            queue.push(prices[i])
        }
    }

    answer[prices.length - 1] = 0

    let cnt = 0
    for (let i = prices.length - 2; i >= 0; i--) {
        cnt++
        if (answer[i] !== -1) continue
        answer[i] = cnt
    }

    return answer
}
