function solution(s) {
  const arr = s.split("");
  const result = [];

  arr.map((w, idx) => {
    let position = -1;

    for (let i = 0; i < idx; i++) {
      if (w === arr[i]) position = idx - i;
    }

    result.push(position);
  });

  return result;
}
