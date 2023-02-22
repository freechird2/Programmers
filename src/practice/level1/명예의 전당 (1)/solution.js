function solution(k, score) {
  let arr = [];
  let result = [];

  score.map((s) => {
    arr.push(s);

    arr = arr.sort((a, b) => b - a).slice(0, k);
    result.push(Math.min(...arr));
  });

  return result;
}
