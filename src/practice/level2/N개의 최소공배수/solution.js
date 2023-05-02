function solution(arr) {
    return arr.reduce((a, b) => {
        return (a * b) / getGdc(a, b)
    })
}

const getGdc = (a, b) => {
    return b === 0 ? a : getGdc(b, a % b)
}
