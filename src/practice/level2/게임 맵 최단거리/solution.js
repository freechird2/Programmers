function solution(maps) {
    let goalX = maps.length - 1
    let goalY = maps[0].length - 1
    let stack = [[0, 0, 1]]
    let answer = -1
    var dir = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ]
    maps[0][0] = 0

    while (stack.length > 0) {
        var [row, col, distance] = stack.shift()

        if (row == goalX && col == goalY) {
            answer = distance
            break
        }

        for (var [r, c] of dir) {
            var newRow = row + r
            var newCol = col + c

            if (newRow >= 0 && newRow <= goalX && newCol >= 0 && newCol <= goalY && maps[newRow][newCol] === 1) {
                stack.push([newRow, newCol, distance + 1])
                maps[newRow][newCol] = 0
            }
        }
    }

    return answer
}
