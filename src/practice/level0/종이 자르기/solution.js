function solution(M, N) {
  var min = M > N ? N : M;
  var max = M > N ? M : N;
  var answer = max - 1 + (min - 1) * max;
  console.log(min, max, answer);
  return (M === 1) & (N === 1) ? 0 : answer;
}
