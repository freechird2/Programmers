function solution(numbers) {
    const arr = numbers.sort((a, b) => {
        let temp1 = a.toString() + b.toString()
        let temp2 = b.toString() + a.toString()

        if (Number(temp1) < Number(temp2)) {
            return 1
        } else if (Number(temp1) > Number(temp2)) {
            return -1
        } else {
            return 0
        }
    })

    let answer = arr.join('')

    return Number(answer) === 0 ? '0' : arr.join('')
}
