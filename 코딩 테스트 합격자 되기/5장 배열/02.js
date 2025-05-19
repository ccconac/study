function solution(arr) {
  const uniqueArray = [...new Set(arr)]; // 중복값 제거

  // 배열 데이터를 내림차순으로 정렬해 반환
  return uniqueArray.sort((a, b) => b - a);
}

console.log(solution([4, 2, 2, 1, 3, 4]));
console.log(solution([2, 1, 1, 3, 2, 5, 4]));
