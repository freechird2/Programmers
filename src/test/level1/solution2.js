function solution(brown, yellow) {
    var answer = []
    let h = 2
    let w = 0

    while (h * 2 < brown) {
        h++

        if ((brown + yellow) % h > 0) continue

        w = (brown + yellow) / h

        if (h > w) continue
        if (w * 2 + h * 2 - 4 > brown) continue

        break
    }

    return [w, h]
}
