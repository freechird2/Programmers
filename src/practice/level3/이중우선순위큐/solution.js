function solution(operations) {
    const queue = []

    operations.map((o) => {
        let [cmd, num] = o.split(' ')
        num = Number(num)

        if (cmd === 'I') {
            queue.push(num)
        } else {
            const remove = Math[num === 1 ? 'max' : 'min'](...queue)
            const idx = queue.findIndex((n) => n === remove)
            queue.splice(idx, 1)
        }
    })

    return !queue.length ? [0, 0] : [Math.max(...queue), Math.min(...queue)]
}
