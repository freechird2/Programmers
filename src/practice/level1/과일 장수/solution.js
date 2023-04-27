function solution(k, m, score) {
  let s = score.sort((a, b) => b - a);
  let result = 0;

  for (let i = 1; i <= Math.floor(score.length / m); i++) {
    result += s[m * i - 1] * m;
  }

  return result;
}
