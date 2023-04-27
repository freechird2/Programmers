function solution(A, B) {
  var arr = [...A];
  var cnt = 0;

  if (A === B) return 0;

  for (var i = 0; i < [...A].length; i++) {
    if (arr.join("") === B) {
      break;
    }

    var last = arr.pop();
    arr.unshift(last);

    cnt++;
  }

  return cnt === [...A].length ? -1 : cnt;
}
