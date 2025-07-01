class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear += 1;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(graph, start) {
  // 그래프를 인접 리스트로 변환
  const adjList = {};

  for (let [u, v] of graph) {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  }

  // 1. 방문한 노드를 저장할 셋
  const visited = new Set();
  const queue = new Queue();

  // 탐색 시 맨 처음 방문할 노드 푸시 후 방문 처리
  queue.push(start);
  visited.add(start);

  // 큐가 비어 있지 않은 동안 반복
  while (!queue.isEmpty()) {
    const node = queue.pop(); // 4. 큐에 있는 원소 중 가장 먼저 푸시된 원소 팝

    // 5. 인접한 이웃 노드들에 대해
    for (let neighbor of adjList[node] || []) {
      // 6. 방문되지 않은 이웃 노드인 경우
      if (!visited.has(neighbor)) {
        // 7. 이웃 노드 방문 처리
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return [...visited];
}

solution(
  [
    [1, 2],
    [1, 3],
    [2, 4],
    [2, 5],
    [3, 6],
    [3, 7],
    [4, 8],
    [5, 8],
    [6, 9],
    [7, 9],
  ],
  1
);

solution(
  [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 0],
  ],
  1
);
