const dayToNum = (date) => {
  const arr = date.split(".");

  return (
    (Number(arr[0]) - 2000) * 12 * 28 + Number(arr[1]) * 28 + Number(arr[2])
  );
};

function solution(today, terms, privacies) {
  const todayNum = dayToNum(today);
  const term = {};
  const result = [];

  terms.map((t) => {
    const temp = t.split(" ");

    term[temp[0]] = Number(temp[1]) * 28;
  });

  privacies.map((d, idx) => {
    const pArr = d.split(" ");

    if (todayNum - dayToNum(pArr[0]) >= term[pArr[1]]) result.push(idx + 1);
  });

  return result;
}
