function solution(N, stages) {
  // 전체 스테이지 개수 N
  // 사용자가 현재 멈춰 있는 스테이지의 번호가 담긴 배열 stages
  // 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수
  // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨 있는 배열 반환

  // 1. 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수 배열에 담기 (현재 머물러 있는 도전자)
  const challenger = Array.from({ length: N + 2 }).fill(0);
  stages.forEach((stage) => (challenger[stage] += 1));

  // 실패율을 담는 객체 필요 (레벨에 해당하는 실패율을 알기 위해 객체 정의)
  const failRatio = {};
  let total = stages.length;

  // 2. 스테이지에 도달한 플레이어 수 (현재 머물러 있는 사람보다 큰 사람들 다 담으면 됨)
  for (let i = 1; i <= N; i += 1) {
    // 아직 클리어하지 못한 플레이어의 수가 0인 경우 실패율은 0 => 5번 스테이지 예시
    if (challenger[i] === 0) {
      failRatio[i] = 0;
      continue;
    }

    // 3. 실패율 계산
    // 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수
    failRatio[i] = challenger[i] / total;

    // 스테이지에 도달한 플레이어 수에서 아직 클리어하지 못한 플레이어 수를 마지막에 빼 줌
    total -= challenger[i];
  }

  // 실패율이 높은 스테이지부터 내림차순으로 정렬
  const answer = Object.entries(failRatio).sort((a, b) => b[1] - a[1]);

  return answer.map((value) => Number(value[0]));
}
