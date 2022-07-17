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

const numberArr: number[] = [];

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
  // const numberArr: number[] = [];
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
      numberArr.push(Number(plusedS));
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
  // const numberArr: number[] = [];
  maxNumberPositionArr.forEach((position) => {
    const i = position[0];
    const j = position[1];
    roopFunc(n, numberPanel, i, j, s, [[i, j]]);

    // for (const positionChangeDirection of positionChangeDirectionPatterns) {
    //   const arr: number[][] = [];
    //   arr.push([i, j]);
    //   if (
    //     !canMove(i + positionChangeDirection[0], j + positionChangeDirection[1])
    //   ) {
    //     continue;
    //   }
    //   let rowIndex = indexFunc(i + positionChangeDirection[0]);
    //   let colIndex = indexFunc(j + positionChangeDirection[1]);
    //   if (
    //     arr.filter((value) => value[0] === rowIndex && value[1] === colIndex)
    //       .length
    //   ) {
    //     continue;
    //   }
    //   arr.push([rowIndex, colIndex]);
    //   const plusedS =
    //     s + String(numberPanel[indexFunc(rowIndex)][indexFunc(colIndex)]);

    //   for (const positionChangeDirection of positionChangeDirectionPatterns) {
    //     const arr2: number[][] = [...arr];
    //     if (
    //       !canMove(
    //         rowIndex + positionChangeDirection[0],
    //         colIndex + positionChangeDirection[1]
    //       )
    //     ) {
    //       continue;
    //     }
    //     let rowIndex2 = indexFunc(rowIndex + positionChangeDirection[0]);
    //     let colIndex2 = indexFunc(colIndex + positionChangeDirection[1]);
    //     if (
    //       arr2.filter(
    //         (value) => value[0] === rowIndex2 && value[1] === colIndex2
    //       ).length
    //     ) {
    //       continue;
    //     }
    //     arr2.push([rowIndex2, colIndex2]);

    //     const plusedS2 = plusedS + String(numberPanel[rowIndex2][colIndex2]);

    //     for (const positionChangeDirection of positionChangeDirectionPatterns) {
    //       const arr3: number[][] = [...arr2];
    //       if (
    //         !canMove(
    //           rowIndex2 + positionChangeDirection[0],
    //           colIndex2 + positionChangeDirection[1]
    //         )
    //       ) {
    //         continue;
    //       }
    //       let rowIndex3 = indexFunc(rowIndex2 + positionChangeDirection[0]);
    //       let colIndex3 = indexFunc(colIndex2 + positionChangeDirection[1]);
    //       if (
    //         arr3.filter(
    //           (value) => value[0] === rowIndex3 && value[1] === colIndex3
    //         ).length
    //       ) {
    //         continue;
    //       }
    //       arr3.push([rowIndex3, colIndex3]);

    //       const plusedS3 = plusedS2 + String(numberPanel[rowIndex3][colIndex3]);

    //       numberArr.push(Number(plusedS3));
    //     }
    //   }
    // }
  });
  return Math.max(...numberArr);
};
