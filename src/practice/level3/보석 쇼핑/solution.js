function solution(gems) {
    const value = [...new Set(gems)].length
    const map = new Map()
    let answer = [1, gems.length]

    for (let i = 0; i < gems.length; i++) {
        map.delete(gems[i])
        map.set(gems[i], i + 1)

        if (map.size === value) {
            const temp = [map.values().next().value, i + 1]

            answer = answer[1] - answer[0] > temp[1] - temp[0] ? temp : answer
        }
    }

    return answer
}
