function solution(a, b) {
  var answer = "";

  var arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var date = new Date(2016, Number(a) - 1, Number(b), 0, 0, 0, 0);

  return arr[date.getDay()];
}
