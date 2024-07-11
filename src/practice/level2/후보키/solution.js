function solution(relation) {
    const length = relation[0].length

    function findUnique(key, arr) {
        if (!key.length) return true

        for (let i = 0; i < key.length; i++) {
            if (key[i].filter((k) => arr.some((a) => a === k)).length === key[i].length) {
                return false
            }
        }

        return true
    }

    const getCombinations = function (arr, selectNumber) {
        const results = []
        if (selectNumber === 1) return arr.map((value) => [value]) // 1개씩 택할 때, 바로 모든 배열의 원소 return

        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1) // 해당하는 fixed를 제외한 나머지 뒤
            const combinations = getCombinations(rest, selectNumber - 1) // 나머지에 대해서 조합을 구한다.
            const attached = combinations.map((combination) => [fixed, ...combination]) //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
            results.push(...attached) // 배열 spread syntax 로 모두다 push
        })

        return results // 결과 담긴 results return
    }

    const example = new Array(length).fill(0).map((f, i) => i)
    let key = []

    for (let i = 0; i < length; i++) {
        const result = getCombinations(example, i + 1)

        for (let j = 0; j < result.length; j++) {
            let temp = {}
            let flag = true

            if (!findUnique(key, result[j])) continue

            for (let a = 0; a < relation.length; a++) {
                let word = relation[a].reduce((acc, cur, idx) => {
                    return result[j].includes(idx) ? acc + cur : acc + ''
                }, '')

                if (temp[word]) {
                    flag = false
                    break
                } else temp[word] = 1
            }
            // console.log(temp, flag, j)
            if (flag) key.push(result[j])
        }
    }

    return key.length || 1
}
