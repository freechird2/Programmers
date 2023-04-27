function solution(t, p) {
  let str = t;
  let result = 0;
  let cnt = 0;

  while (true) {
    let subStr = str.substr(cnt, p.length);
    if (subStr.length < p.length) break;

    if (Number(subStr) <= Number(p)) result++;

    cnt++;
  }

  return result;
}
