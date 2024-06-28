function solution(k, tangerine) {
    let answer = 0
    let temp = k
    let cnt = {}

    tangerine.map((t) => {
        if (!cnt[t]) cnt[t] = 1
        else cnt[t]++
    })

    var sortable = []
    for (var name in cnt) {
        sortable.push(cnt[name])
    }

    sortable.sort(function (a, b) {
        return b - a
    })

    for (let i = 0; i < sortable.length; i++) {
        if (temp <= 0) break

        temp -= sortable[i]
        answer++
    }

    return answer
}
