function solution(clothes) {
    let answer = 1
    const map = new Map()

    clothes.map((c) => {
        const [name, kinds] = c

        if (map.has(kinds)) map.set(kinds, map.get(kinds) + 1)
        else map.set(kinds, 1)
    })

    for (let key of map) {
        const [k, v] = key
        answer *= v + 1
    }

    return answer - 1
}
