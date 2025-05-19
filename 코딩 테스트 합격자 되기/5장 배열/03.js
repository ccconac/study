function solution(numbers) {
  const n = numbers.length;
  const sumArray = [];

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      sumArray.push(numbers[i] + numbers[j]);
    }
  }

  const uniqueArray = [...new Set(sumArray)];

  return uniqueArray.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
