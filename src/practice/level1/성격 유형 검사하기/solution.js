function solution(survey, choices) {
    var answer = ''

    const score = [0, 3, 2, 1, 0, 1, 2, 3]
    const type = [
        ['R', 'T'],
        ['C', 'F'],
        ['J', 'M'],
        ['A', 'N'],
    ]
    const map = new Map([
        ['R', 0],
        ['T', 0],
        ['C', 0],
        ['F', 0],
        ['J', 0],
        ['M', 0],
        ['A', 0],
        ['N', 0],
    ])

    survey.map((s, idx) => {
        const keys = s.split('')

        if (choices[idx] < 4) {
            map.set(keys[0], map.get(keys[0]) + score[choices[idx]])
        } else if (choices[idx] > 4) {
            map.set(keys[1], map.get(keys[1]) + score[choices[idx]])
        }
    })

    type.map((t) => {
        if (map.get(t[0]) === map.get(t[1]) || map.get(t[0]) > map.get(t[1])) answer += t[0]
        else answer += t[1]
    })

    return answer
}
