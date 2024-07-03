function solution(k, dungeons) {
    const output = []
    let answer = 0

    const permutation = (permu, rests, output) => {
        if (rests.length === 0) {
            output.push(permu)
        }

        rests.forEach((v, idx) => {
            const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)]
            permutation([...permu, v], rest, output)
        })
    }

    permutation([], dungeons, output)

    output.map((o) => {
        // console.log(o)
        let t = k
        let leng = o.length
        let cnt = 0

        for (let i = 0; i < o.length; i++) {
            // console.log(t, o[i])
            if (t >= o[i][0]) {
                t -= o[i][1]
                cnt++
            } else {
                break
            }
        }

        answer = answer < cnt ? cnt : answer
    })

    return answer
}
