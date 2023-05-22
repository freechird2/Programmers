function solution(files) {
    const arr = []

    files.map((f) => {
        const parse = ['', '', '']

        for (let i = 0; i < f.length; i++) {
            const isNumber = !isNaN(parseInt(f[i]))

            if (!isNumber && !parse[1].length) {
                parse[0] += f[i]
            } else if (isNumber && !parse[2].length) {
                parse[1] += f[i]
            } else {
                parse[2] += f[i]
            }
        }

        arr.push(parse)
    })

    let cnt = 0

    arr.sort((a, b) => {
        const as = a[0].toLowerCase()
        const bs = b[0].toLowerCase()

        if (as > bs) return 1
        else if (as < bs) return -1
        else {
            const an = Number(a[1])
            const bn = Number(b[1])

            if (an > bn) return 1
            else if (an < bn) return -1
            else return 0
        }
    })

    return arr.map((a) => a.join(''))
}
