function solution(s) {
  const n = s.length;
  const mapping = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  let answer = 0;

  for (let i = 0; i < n; i += 1) {
    const stack = [];
    let isCorrect = true;

    for (let j = 0; j < n; j += 1) {
      const c = s[(i + j) % n];

      if (c === '(' || c === '{' || c === '[') stack.push(c);
      else {
        const top = stack.pop();
        if (top !== mapping[c]) {
          isCorrect = false;
          break;
        }
      }
    }

    if (isCorrect && !stack.length) answer += 1;
  }

  return answer;
}

console.log(solution('[](){}'));
console.log(solution('}]()[{'));
console.log(solution('[)(]'));
console.log(solution('}}}'));
