function solution(n) {
    let answer = 0
    const arr = Array(n).fill(0)

    const findQueen = (row) => {
        if (row === n) {
            answer++
            return
        }

        for (let i = 0; i < n; i++) {
            arr[row] = i
            let flag = true

            for (let j = 0; j < row; j++) {
                if (arr[row] === arr[j]) {
                    flag = false
                    break
                }

                if (Math.abs(arr[row] - arr[j]) === Math.abs(j - row)) {
                    flag = false
                    break
                }
            }

            if (flag) findQueen(row + 1)
        }
    }

    for (let i = 0; i < n; i++) {
        arr[0] = i

        findQueen(1)
    }

    return answer
}
