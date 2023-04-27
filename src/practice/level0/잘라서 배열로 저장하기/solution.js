function solution(my_str, n) {
  console.log(my_str.slice(0, n));
  let str = my_str;
  let arr = [];

  while (true) {
    arr.push(str.slice(0, n));
    str = str.replace(str.slice(0, n), "");

    if (str.length < n) {
      if (str) arr.push(str);
      break;
    }
  }

  return arr;
}
