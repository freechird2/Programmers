function solution(X, Y) {
    let a = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
    }

    let b = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
    }

    let answer = []

    for (let i = 0; i < X.length; i++) {
        a[X[i]]++
    }

    for (let i = 0; i < Y.length; i++) {
        b[Y[i]]++
    }

    for (let i = 0; i < 10; i++) {
        if (a[i] === 0 || b[i] === 0) continue

        let cnt = a[i] < b[i] ? a[i] : b[i]

        if (cnt > 0) {
            for (let j = 0; j < cnt; j++) answer.push(i)
        }
    }

    if (!answer.length) return '-1'

    let result = answer.sort().reverse().join('')

    if (Number(result) === 0) return '0'
    else return result.toString()
}
