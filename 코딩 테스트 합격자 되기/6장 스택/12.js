// O(N^2)
function solution(prices) {
  const n = prices.length;
  const answer = [];

  for (let i = 0; i < n; i++) {
    let second = 0;

    for (let j = i + 1; j < n; j++) {
      second += 1;
      if (prices[i] > prices[j]) break;
    }

    answer.push(second);
  }

  return answer;
}

// O(N)
function solution2(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);

  const stack = [0];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = i - j;
    }

    stack.push(i);
  }

  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = n - 1 - j;
  }

  return answer;
}
