function solution(progresses, speeds) {
  const answer = [1];
  const deployDays = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

  let deployDay = deployDays[0];

  for (let i = 1, j = 0; i < deployDays.length; i++) {
    if (deployDay >= deployDays[i]) answer[j] += 1;
    else {
      deployDay = deployDays[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
