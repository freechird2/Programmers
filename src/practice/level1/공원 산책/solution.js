function solution(park, routes) {
    let width = 0
    let height = park.length
    let position = []

    for (let i = 0; i < park.length; i++) {
        if (park[i].indexOf('S') > -1) {
            width = park[i].length
            position = [i, park[i].indexOf('S')]
            break
        }
    }

    for (let r of routes) {
        const route = r.split(' ')
        let x = Number(position[1])
        let y = Number(position[0])
        const r1 = Number(route[1])
        let flag = true

        if (route[0] === 'E') {
            if (x + r1 >= width) continue

            for (let i = x + 1; i <= x + r1; i++) {
                if (park[y].split('')[i] === 'X') {
                    flag = false
                    break
                }
            }

            if (!flag) continue

            position = [y, x + r1]
        } else if (route[0] === 'W') {
            if (x - r1 < 0) continue

            for (let i = x - 1; i >= x - r1; i--) {
                if (park[y].split('')[i] === 'X') {
                    flag = false
                    break
                }
            }

            if (!flag) continue

            position = [y, x - r1]
        } else if (route[0] === 'S') {
            if (y + r1 >= height) continue

            for (let i = y + 1; i <= y + r1; i++) {
                if (park[i].split('')[x] === 'X') {
                    flag = false
                    break
                }
            }

            if (!flag) continue

            position = [y + r1, x]
        } else if (route[0] === 'N') {
            if (y - r1 < 0) continue

            for (let i = y - 1; i >= y - r1; i--) {
                if (park[i].split('')[x] === 'X') {
                    flag = false
                    break
                }
            }

            if (!flag) continue

            position = [y - r1, x]
        }
    }

    return position
}
