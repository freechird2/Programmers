function solution(phone_book) {
    return !phone_book.sort().some((number, index) => {
        return index === phone_book.length - 1 ? false : phone_book[index + 1].startsWith(number)
    })
}
