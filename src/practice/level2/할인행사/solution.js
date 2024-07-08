function solution(want, number, discount) {
    const cntArr = Array(number.length).fill(0)
    const cart = {}
    let answer = 0

    want.map((w, i) => {
        cart[w] = i
    })

    for (let i = 0; i < discount.length; i++) {
        if (cart[discount[i]] !== undefined) cntArr[cart[discount[i]]]++

        if (i >= 9) {
            if (JSON.stringify(number) === JSON.stringify(cntArr)) answer++

            if (cart[discount[i - 9]] !== undefined) cntArr[cart[discount[i - 9]]]--
        }
    }

    return answer
}
