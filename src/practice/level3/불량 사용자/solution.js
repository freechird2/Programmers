let arr = []

const reg = (userId, bannedId) => {
    const regExp = new RegExp('^' + bannedId.replace(/\*/gi, '.') + '$')

    return regExp.test(userId)
}

const dfs = (user, ban, com) => {
    if (!ban.length) {
        arr.push(com)
        return
    }

    for (let i = 0; i < user.length; i++) {
        if (reg(user[i], ban[0])) {
            dfs([...user.slice(0, i), ...user.slice(i + 1)], ban.slice(1), [...com, user[i]])
        }
    }
}

function solution(user_id, banned_id) {
    dfs(user_id, banned_id, [])

    arr = arr.map((a) => a.sort().join(''))

    return [...new Set(arr)].length
}
