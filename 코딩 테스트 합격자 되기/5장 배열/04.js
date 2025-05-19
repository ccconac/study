// 내 풀이
function solution(answers) {
  // 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
  // 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
  // 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < answers.length; j += 1) {
      if (patterns[i][j % patterns[i].length] === answers[j]) scores[i] += 1;
    }
  }

  const maxScore = Math.max(...scores);

  const answer = scores.map((score, index) => {
    if (score === maxScore) return index + 1;
    return 0;
  });

  return answer.filter((number) => number !== 0);
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));

// 다른 사람 풀이를 기반으로 풀이 재작성
function solution2(answers) {
  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const scores = [0, 0, 0];

  answers.forEach((answer, index) => {
    if (person1[index % person1.length] === answer) scores[0] += 1;
    if (person2[index % person2.length] === answer) scores[1] += 1;
    if (person3[index % person3.length] === answer) scores[2] += 1;
  });

  const maxScore = Math.max(...scores);

  const answer = [];
  scores.forEach((score, index) => {
    if (score === maxScore) answer.push(index + 1);
  });

  return answer;
}

console.log(solution2([1, 2, 3, 4, 5]));
console.log(solution2([1, 3, 2, 4, 2]));
