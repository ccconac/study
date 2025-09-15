function countSort(arr, k) {
  const hashtable = new Array(k + 1).fill(0);

  for (const number of arr) {
    if (number <= k) hashtable[number] += 1;
  }

  return hashtable;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);

  for (const number of arr) {
    const complement = target - number;

    if (
      complement !== number &&
      complement >= 0 &&
      complement <= target &&
      hashtable[complement] === 1
    ) {
      return true;
    }
  }

  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6));
console.log(solution([2, 3, 5, 9], 10));
