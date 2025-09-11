# 큐 구현하기

## 배열을 이용하는 방식  

> rear와 front가 계속해서 증가하여 배열 메모리가 계속 증가한다는 단점이 있으나, 대부분의 문제에서 문제되는 경우는 없음 

```js
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}
```

## 연결 리스트를 이용하는 방식

> 메모리 사용 측면에서 훨씬 효율적이긴 하지만, 배열과 shift()를 사용해 풀이해도 대부분 문제되지 않음

```js
class Node {
  constructor(data) {
    this.data = data; // 요소의 값
    this.next = null; // 다음 요소를 참조
  }
}

class Queue {
  constructor() {
    this.head = null; // 첫 번째 요소 참조
    this.tail = null; // 마지막 요소 참조
    this.size = 0; // 큐의 길이
  }

  push(data) {
    const newNode = new newNode(data); // 새로운 요소 생성

    // 큐가 비어 있다면 head와 tail을 모두 새로 생성한 요소로 설정
    // 큐에 요소가 있다면 tail의 next 속성을 새로운 요소로 설정 후 tail이 새로운 요소를 참조하도록 변경
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  pop() {
    // head가 null이라면 큐가 비어 있다는 뜻
    if (!this.head) return null;

    // 두 번째 요소를 head의 참조로 변경하면 첫 번째 요소는 자연스럽게 사라짐
    const removeNode = this.head;
    this.head = this.head.next;

    // 만약 두 번째 요소가 없었다면 큐가 비어 있다는 뜻이니 tail도 null로 설정
    if (!this.head) this.tail = null;

    this.size--;

    return removeNode.data;
  }

  isEmpty() {
    return this.size ==== 0;
  }
}
```