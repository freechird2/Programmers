function solution(board) {
    var answer = 0
    const stack = []

    const width = board[0].length - 1
    const height = board.length - 1

    const dy = [-1, 1, 0, 0]
    const dx = [0, 0, -1, 1]

    board = board.map((b) => b.split(''))

    board.map((items, i) => {
        items.map((t, j) => {
            if (t === 'R') stack.push([i, j])
        })
    })

    while (stack.length) {
        const size = stack.length

        for (let z = 0; z < size; z++) {
            const [x, y] = stack.shift()

            for (let i = 0; i < 4; i++) {
                let cx = x
                let cy = y

                while (true) {
                    if (cx < 0 || cx > height || cy < 0 || cy > width || board[cx][cy] === 'D') {
                        break
                    }

                    cx += dx[i]
                    cy += dy[i]
                }

                cx -= dx[i]
                cy -= dy[i]

                if (board[cx][cy] === 'G') return answer + 1

                if (board[cx][cy] !== 'O' && board[cx][cy] !== 'R') {
                    board[cx][cy] = 'O'
                    stack.push([cx, cy])
                }
            }
        }

        answer++
    }

    return -1
}
