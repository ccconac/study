function solution(arr1, arr2) {
  const answer = Array.from({ length: arr1.length }, () =>
    Array(arr2[0].length).fill(0)
  );

  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2[0].length; j += 1) {
      for (let k = 0; k < arr1[0].length; k += 1) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}

const test1 = solution(
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ]
);

const test2 = solution(
  [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],
  [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ]
);

console.log(test1, test2);
