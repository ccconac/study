/** 정렬 함수 (sort())
 * 1. 첫 번째 인자 a가 두 번째 인자 b보다 "앞"에 나와야 한다면 음수를 반환
 * 2. 첫 번째 인자 a가 두 번째 인자 b보다 "뒤"에 나와야 한다면 양수를 반환
 * 3. 위치 변경을 하지 않는다면 0 반환
 */

function solution(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(solution([1, -5, 2, 4, 3]));
console.log(solution([2, 1, 1, 3, 2, 5, 4]));
console.log(solution([1, 6, 7]));

