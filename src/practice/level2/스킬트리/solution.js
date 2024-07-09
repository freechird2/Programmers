function solution(skill, skill_trees) {
    const _s = skill.split('')
    let answer = 0

    for (let i = 0; i < skill_trees.length; i++) {
        const _st = skill_trees[i]
        let level = 0
        let result = true

        for (let j = 0; j < _st.length; j++) {
            const idx = _s.indexOf(_st[j])
            if (idx === -1) continue
            else if (idx !== level) {
                result = false
                break
            }

            level++
        }

        if (result) answer++
    }

    return answer
}
