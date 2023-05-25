const reg = (text, target) => {
    for (let i = 0; i < text.length; i++) {
        const temp = text.split('')
        temp[i] = '.'

        const r = new RegExp(temp.join(''))

        if (r.test(target)) return true
    }

    return false
}

const arr = []

const dfs = (b, t, words, com) => {
    if (b === t) {
        arr.push(com)
        return
    } else if (!words.length || b === t) {
        return
    }

    for (let i = 0; i < words.length; i++) {
        if (reg(b, words[i])) {
            dfs(words[i], t, [...words.slice(0, i), ...words.slice(i + 1)], [...com, words[i]])
        }
    }
}

function solution(begin, target, words) {
    if (!words.includes(target)) return 0
    dfs(begin, target, words, [])

    return Math.min(...arr.map((a) => a.length))
}
