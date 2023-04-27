function solution(players, callings) {
    let order = {}
    let player = [...players]

    players.map((p, i) => {
        order[p] = i
    })

    callings.map((c, i) => {
        const pIdx = order[c]
        const preP = player[pIdx - 1]

        player[pIdx - 1] = c
        player[pIdx] = preP

        order[c] = pIdx - 1
        order[preP] = pIdx
    })

    return player
}
