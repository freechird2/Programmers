function solution(brown, yellow) {
    const total = brown + yellow
    let arr = []

    for (let i = 1; i <= Math.sqrt(total); i++) {
        if (total % i === 0) {
            arr.push(i)

            if (total / i !== i) arr.push(total / i)
        }
    }

    arr = arr.sort((a, b) => a - b).filter((f) => f > 2 && f < total)

    for (let i = 0; i < arr.length; i++) {
        let x = arr[i]
        let y = total / x

        if (y > x) continue

        if (x * 2 >= brown) continue

        let a = (brown - x * 2) / 2 + 2

        if (a === y) {
            return [x, y]
        }
    }
}
