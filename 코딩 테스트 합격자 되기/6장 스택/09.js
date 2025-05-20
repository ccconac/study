function solution(decimal) {
  // 10진수를 2진수로 변환하려면
  // 1. 10진수를 2로 나눔 (이때의 나머지 스택에 쌓음)
  // 2. reverse

  const answer = [];

  while (decimal > 1) {
    answer.push(Math.floor(decimal % 2));
    decimal /= 2;
  }

  return answer.reverse().join('');
}

console.log(solution(10));
console.log(solution(27));
console.log(solution(12345));
