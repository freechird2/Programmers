function solution(ingredient) {
    let answer = 0
    let n = ingredient.length

    for (let i = 0; i < n; i++) {
        const temp = ingredient.slice(i, i + 4)

        if (temp.join('') === '1231') {
            ingredient.splice(i, 4)
            answer++
            i = i - 4 > -1 ? i - 4 : -1
        }
    }

    return answer
}
