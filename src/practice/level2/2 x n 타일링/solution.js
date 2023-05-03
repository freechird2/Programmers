function solution(n) {
    const fibo = (num) => {
        const arr = Array(num + 1).fill(0)
        arr[0] = 1
        arr[1] = 1

        for (let i = 2; i <= num; i++) {
            arr[i] = (arr[i - 2] + arr[i - 1]) % 1000000007
        }

        return arr[num]
    }

    return fibo(n)
}
