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

let numberArr: number = 0;

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
let iniN = 0;
const canMove = (i: number, j: number) => {
  let canMove = true;
  if (i < 0 && j > iniN - 1) canMove = false;
  if (i > iniN - 1 && j > iniN - 1) canMove = false;
  if (i < 0 && j < 0) canMove = false;
  if (i > iniN - 1 && j < 0) canMove = false;
  return canMove;
};

const indexFunc = (index: number) => {
  if (index > iniN - 1) return 0;
  if (index < 0) return iniN - 1;
  return index;
};

const roopFunc = (
  n: number,
  numberPanel: numberPanel,
  beforeRowIndex: number,
  beforeColIndex: number,
  re_s: string,
  re_cannotMovePositionArr: number[][]
) => {
  let remaining_n = n - 1;
  const i = beforeRowIndex;
  const j = beforeColIndex;
  let s = re_s;
  for (const [
    index,
    positionChangeDirection,
  ] of positionChangeDirectionPatterns.entries()) {
    const cannotMovePositionArr = [...re_cannotMovePositionArr];
    let rowIndex = i + positionChangeDirection[0];
    let colIndex = j + positionChangeDirection[1];
    if (!canMove(rowIndex, colIndex)) {
      continue;
    }
    rowIndex = indexFunc(rowIndex);
    colIndex = indexFunc(colIndex);
    if (
      cannotMovePositionArr.filter(
        (value) => value[0] === rowIndex && value[1] === colIndex
      ).length
    ) {
      continue;
    }
    cannotMovePositionArr.push([rowIndex, colIndex]);

    const plusedS = s + String(numberPanel[rowIndex][colIndex]);
    if (remaining_n == 0) {
      if (Number(plusedS) > numberArr) {
        numberArr = Number(plusedS);
      }
      if (index === positionChangeDirectionPatterns.length - 1) return;
      continue;
    }

    roopFunc(
      remaining_n,
      numberPanel,
      rowIndex,
      colIndex,
      plusedS,
      cannotMovePositionArr
    );
  }
};

export const maxNumber = (
  n: number,
  numberPanel: numberPanel,
  maxNumberPositionArr: positionArr,
  s: string
) => {
  iniN = n;

  maxNumberPositionArr.forEach((position) => {
    const i = position[0];
    const j = position[1];
    roopFunc(iniN - 1, numberPanel, i, j, s, [[i, j]]);
  });
  return numberArr;
};
