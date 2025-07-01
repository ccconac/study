function solution(graph, start) {
  // 1. 그래프를 인접 리스트로 변환
  const adjList = {};
  graph.forEach(([u, v]) => {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  });

  console.log(adjList); // T2: { A: [ 'B', 'C' ], B: [ 'D', 'E' ], C: [ 'F' ], E: [ 'F' ] }

  // 2. DFS 탐색 함수
  function dfs(node, visited, result) {
    visited.add(node); // 3. 현재 노드를 방문한 노드들의 집합에 추가
    result.push(node); // 4. 현재 노드를 결과 배열에 추가

    // 5. 현재 노드와 인접한 노드 순회
    (adjList[node] || []).forEach((neighbor) => {
      // 6. 만약 방문하지 않은 노드라면
      if (!visited.has(neighbor)) dfs(neighbor, visited, result);
    });
  }

  const visited = new Set();
  const result = [];

  dfs(start, visited, result);

  console.log(result); // T2: [ 'A', 'B', 'D', 'E', 'F', 'C' ]

  return result;
}

solution(
  [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
  'A'
);

solution(
  [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'D'],
    ['B', 'E'],
    ['C', 'F'],
    ['E', 'F'],
  ],
  'A'
);
