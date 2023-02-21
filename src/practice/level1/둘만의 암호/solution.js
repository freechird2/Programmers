function solution(s, skip, index) {
  const arr = s.split("");
  const skipArr = [];
  let result = "";

  skip.split("").map((s, idx) => {
    skipArr.push(skip.charCodeAt(idx));
  });

  arr.map((w, idx) => {
    let asc = s.charCodeAt(idx);

    for (let i = 0; i < index; i++) {
      asc++;
      if (asc > 122) asc = 97;

      if (skipArr.includes(asc)) {
        i--;
        continue;
      }
    }

    result = result + String.fromCharCode(asc);
  });

  return result;
}
