const part1 = (crabs) => {
  crabs.sort((c1, c2) => c1 - c2);

  const half = Math.floor(crabs.length / 2);
  let median = 0;

  if (crabs.length % 2 === 0) {
    median = (crabs[half - 1] + crabs[half]) / 2;
  } else {
    median = crabs[half];
  }

  let fuel = 0;
  crabs.forEach((crab) => (fuel += Math.abs(crab - median)));

  return fuel;
};

export default part1;
