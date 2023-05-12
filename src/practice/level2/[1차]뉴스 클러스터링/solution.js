function solution(str1, str2) {
    var answer = 0
    const reg = /^[A-Za-z]*$/
    const arr1 = [],
        arr2 = []

    for (let i = 0; i < str1.length - 1; i++) {
        const temp = str1.substr(i, 2)

        if (reg.test(temp)) arr1.push(temp.toUpperCase())
    }

    for (let i = 0; i < str2.length - 1; i++) {
        const temp = str2.substr(i, 2)

        if (reg.test(temp)) arr2.push(temp.toUpperCase())
    }

    if (arr1.length === 0 && arr2.length === 0) return 65536

    const tempArr = [...arr2]

    const g = arr1.reduce((acc, cur) => {
        if (tempArr.includes(cur)) {
            const index = tempArr.indexOf(cur)
            tempArr.splice(index, 1)
            return [...acc, cur]
        } else return acc
    }, [])

    const union = arr1.length + arr2.length - g.length

    if (union === 0 && g.length === 0) return 65536
    if (g.length === 0 && union > 0) return 0

    return Math.floor((g.length / union) * 65536)
}
