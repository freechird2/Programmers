function solution(number, limit, power) {
  let result = 0;

  for (let j = 1; j <= number; j++) {
    const arr = [];

    for (let i = 1; i <= j / 2; i++) {
      if (j % i === 0) arr.push(i);
    }

    arr.push(j);

    result += arr.length > limit ? power : arr.length;
  }

  return result;
}
