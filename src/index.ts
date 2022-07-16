type numberList = number[];
type numberPanel = numberList[];
type positionArr = number[][];

export const maxNumberPositionArr = (numberPanel: numberPanel) => {
  let max_number = Math.max(...numberPanel.flat());
  const maxNumberPositionArr = [];
  for (let i = 0; i < numberPanel.length; i++) {
    for (let j = 0; j < numberPanel[i].length; j++) {
      const curent_number = numberPanel[i][j];
      if (curent_number !== max_number) {
        continue;
      }
      maxNumberPositionArr.push([i, j]);
    }
  }
  return maxNumberPositionArr;
};

const positionChangeDirectionPatterns = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [-1, 1],
  [-1, -1],
  [1, -1],
];

const canMove = (i: number, j: number) => {
  let canMove = true;
  if (i < 0 && j > 4 - 1) canMove = false;
  if (i > 4 - 1 && j > 4 - 1) canMove = false;
  if (i < 0 && j < 0) canMove = false;
  if (i > 4 - 1 && j < 0) canMove = false;
  return canMove;
};

const indexFunc = (index: number) => {
  if (index > 4 - 1) return 0;
  if (index < 0) return 4 - 1;
  return index;
};

export const maxNumber = (
  numberPanel: numberPanel,
  maxNumberPositionArr: positionArr,
  s: string
) => {
  const numberArr: number[] = [];
  maxNumberPositionArr.forEach((position) => {
    const i = position[0];
    const j = position[1];
    for (const positionChangeDirection of positionChangeDirectionPatterns) {
      let rowIndex = i + positionChangeDirection[0];
      let colIndex = j + positionChangeDirection[1];
      if (!canMove(rowIndex, colIndex)) {
        continue;
      }
      const plusedS =
        s + String(numberPanel[indexFunc(rowIndex)][indexFunc(colIndex)]);
      numberArr.push(Number(plusedS));
    }
  });
  return Math.max(...numberArr);
};
