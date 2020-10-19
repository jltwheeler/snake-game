export const arraysEqual = (firstArr, secondArr) => {
  if (firstArr.length !== secondArr.length) {
    return false;
  }

  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) return false;
  }

  return true;
};

const generateRandLoc = (numCols, numRows) => {
  return [
    Math.floor(Math.random() * numCols),
    Math.floor(Math.random() * numRows),
  ];
};

export const generateRandFoodLoc = (numCols, numRows, obstacleArr) => {
  const randomLoc = generateRandLoc(numCols, numRows);
  const foodBlockedByObstacle = obstacleArr.find((item) =>
    arraysEqual(item, randomLoc)
  );

  if (foodBlockedByObstacle) {
    return generateRandFoodLoc(numCols, numRows, obstacleArr);
  } else {
    return randomLoc;
  }
};

export const generateObstacles = (numCols, numRows) => {
  return [...Array(4)].reduce((curr, _) => {
    const randLoc1 = generateRandLoc(numCols, numRows);
    const randLoc2 = [...randLoc1];
    const randLoc3 = [...randLoc1];
    const randLoc4 = [...randLoc1];

    randLoc2[0] += 1;
    randLoc3[1] += 1;
    randLoc4[0] += 1;
    randLoc4[1] += 1;

    return curr.concat([randLoc1, randLoc2, randLoc3, randLoc4]);
  }, []);
};
