function solution(food) {
  let order = "";
  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      order = order + i.toString();
    }
  }

  return order + "0" + [...order.split("")].reverse().join("");
}
