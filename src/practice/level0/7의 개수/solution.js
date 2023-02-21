function solution(array) {
  let cnt = 0;
  array.map((n) => {
    n.toString()
      .split("")
      .map((nm) => {
        if (nm === "7") cnt++;
      });
  });

  return cnt;
}
