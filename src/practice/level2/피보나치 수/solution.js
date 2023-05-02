function solution(n) {
    const getNum = (num) => {
        const fNum = [0, 1, 1]

        for (let i = 3; i <= n; i++) {
            fNum[i] = fNum[i - 1] + fNum[i - 2]
        }
        console.log(fNum)
        return fNum[n]
    }

    return getNum(n) % 1234567
}
