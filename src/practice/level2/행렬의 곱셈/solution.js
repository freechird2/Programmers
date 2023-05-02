function solution(arr1, arr2) {
    const answer = []

    for (let i = 0; i < arr1.length; i++) {
        const result = []

        for (let k = 0; k < arr2[0].length; k++) {
            let temp = 0

            for (let j = 0; j < arr1[0].length; j++) {
                temp += arr1[i][j] * arr2[j][k]
            }
            result.push(temp)
        }
        answer.push(result)
    }

    return answer
}
