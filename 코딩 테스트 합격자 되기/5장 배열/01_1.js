// 버블 정렬 활용
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n - i - 1; j += 1) {
      if (arr[j + 1] < arr[j]) {
        const tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }

  return arr;
}

// sort() 함수 활용
function doSort(arr) {
  return arr.sort((a, b) => a - b);
}

// 함수 실행 시간을 계산하기 위한 함수
function measureTime(callback, arr) {
  const start = Date.now();
  const result = callback(arr);
  const end = Date.now();

  return [end - start, result];
}

let arr = Array.from({ length: 10000 }, (_, k) => 10000 - k); // 10000부터 0까지

console.log(arr); // [10000, 9999, 9998, ..., 0]

const [bubbleTime, bubbleResult] = measureTime(bubbleSort, arr);
console.log(`버블 정렬 코드 실행 시간: ${bubbleTime}ms`); // 105ms

arr = Array.from({ length: 10000 }, (_, k) => 10000 - k);

const [doSortTime, doSortResult] = measureTime(doSort, arr);
console.log(`정렬 함수 코드 실행 시간: ${doSortTime}ms`); // 0ms
