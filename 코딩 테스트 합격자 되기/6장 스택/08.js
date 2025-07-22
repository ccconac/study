function solution(str) {
  const stack = [];

  // 1. 소괄호가 정상적으로 열고 닫혔다면 true 반환
  // 2. 정상적으로 닫히지 않았다면 false 반환
  for (const value of str) {
    if (value === '(') stack.push(value);
    else if (value === ')') {
      if (!stack.length) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(solution('(())()'));
console.log(solution('((())()'));
console.log(solution('((())))))))))()'));
console.log(solution(')()'));
