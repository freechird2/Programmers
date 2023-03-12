function solution(wallpaper) {
    let answer = []
    let arrI = [],
        arrJ = []

    wallpaper.map((lu, i) => {
        lu.split('').map((rd, j) => {
            if (rd === '#') {
                arrI.push(i)
                arrJ.push(j)
            }
        })
    })

    answer = [Math.min(...arrI), Math.min(...arrJ), Math.max(...arrI) + 1, Math.max(...arrJ) + 1]

    return answer
}
