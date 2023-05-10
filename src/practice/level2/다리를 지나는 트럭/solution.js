function solution(bridge_length, weight, truck_weights) {
    const t = [...truck_weights]
    const stack = []
    let pw = 0
    let second = 1

    while (t.length) {
        if (stack.length) {
            const [w, e] = stack[0]

            if (second === e) {
                pw -= w
                stack.shift()
            }
        }

        if (pw + t[0] <= weight) {
            const temp = t.shift()

            stack.push([temp, second + bridge_length])
            pw += temp
        } else {
            second = stack[0][1] - 1
        }

        second++
    }

    return stack.pop()[1]
}
