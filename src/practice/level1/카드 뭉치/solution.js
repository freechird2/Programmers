function solution(cards1, cards2, goal) {
  let deck1 = cards1;
  let deck2 = cards2;
  const result = [];

  goal.map((word) => {
    if (deck1[0] === word) {
      deck1 = deck1.filter((w) => w !== word);
      result.push(word);
      return true;
    }

    if (deck2[0] === word) {
      deck2 = deck2.filter((w) => w !== word);
      result.push(word);
      return true;
    }
  });

  return result.join("") === goal.join("") ? "Yes" : "No";
}
