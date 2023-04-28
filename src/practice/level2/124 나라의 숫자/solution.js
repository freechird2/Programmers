function solution(n) {
    const temp = [4, 1, 2]
    var answer = ''

    while (n) {
        answer = temp[n % 3] + answer
        n = n % 3 === 0 ? n / 3 - 1 : parseInt(n / 3)
    }

    return answer
}
