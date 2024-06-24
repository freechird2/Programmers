function solution(friends, gifts) {
    let obj = {}

    friends.map((f) => {
        let b = {}

        friends
            .filter((m) => f !== m)
            .map((n) => {
                b[n] = 0
            })

        obj[f] = {
            a: 0,
            b,
            c: 0,
        }
    })

    gifts.map((g) => {
        let l = g.split(' ')

        obj[l[0]].a = obj[l[0]].a + 1
        obj[l[1]].a = obj[l[1]].a - 1

        obj[l[0]].b[l[1]] = obj[l[0]].b[l[1]] + 1
    })

    for (let main in obj) {
        for (let sub in obj[main].b) {
            if (obj[main].b[sub] > obj[sub].b[main]) {
                obj[main].c++
            } else if (obj[main].b[sub] === obj[sub].b[main] && obj[main].a > obj[sub].a) {
                obj[main].c++
            }
        }
    }

    let answer = 0

    for (let main in obj) {
        obj[main].c
        if (obj[main].c > answer) answer = obj[main].c
    }

    return answer
}
