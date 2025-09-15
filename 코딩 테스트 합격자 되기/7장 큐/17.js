function solution(cards1, cards2, goal) {
  let j = 0;
  let k = 0;

  for (let i = 0; i < goal.length; i++) {
    if (cards1[j] === goal[i]) j++;
    else if (cards2[k] === goal[i]) k++;
    else return 'No';
  }

  return 'Yes';
}

console.log(
  solution(
    ['i', 'drink', 'water'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
);

console.log(
  solution(
    ['i', 'water', 'drink'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
);
