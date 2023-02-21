function solution(num, total) {
  var answer = [];
  var start = -100;
  var value = 0;

  while (true) {
    for (var i = start; i < start + num; i++) {
      value += i;
      answer.push(i);
    }

    if (total === value || value > 1000) break;

    start++;
    value = 0;
    answer = [];
  }

  console.log(start);
  console.log(answer);
  return answer;
}
