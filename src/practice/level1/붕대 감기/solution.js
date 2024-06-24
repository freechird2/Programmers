function solution(bandage, health, attacks) {
    let answer = health
    let length = attacks.length

    for (let i = 0; i < length; i++) {
        if (i !== 0) {
            let sec = attacks[i][0] - attacks[i - 1][0] - 1
            answer += sec * bandage[1] + Math.floor(sec / bandage[0]) * bandage[2]

            answer = answer > health ? health : answer
        }

        answer -= attacks[i][1]

        if (answer <= 0) {
            answer = -1
            break
        }
    }

    return answer
}
