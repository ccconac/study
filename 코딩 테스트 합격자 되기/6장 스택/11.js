function solution(s) {
  const stack = [];
  const n = s.length;

  if (n % 2) return 0;

  for (const c of s) {
    if (c === stack[stack.length - 1]) stack.pop();
    else stack.push(c);
  }

  return stack.length ? 0 : 1;
}
