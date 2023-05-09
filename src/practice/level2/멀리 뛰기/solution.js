function solution(n) {
    const fib = (num) => {
        const dp = Array(num + 1).fill(0)

        dp[0] = 1
        dp[1] = 1

        for (let i = 2; i <= num; i++) {
            dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567
        }

        return dp[num]
    }

    return fib(n)
}
