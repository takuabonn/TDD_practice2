import { stringify } from "ts-jest";

type NumberPanel = number[][];

export class NumberBox {
  private positionChangeDirectionPatterns = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, 1],
    [-1, -1],
    [1, -1],
  ];

  //   canMove = (i: number, j: number) => {
  //     let canMove = true;
  //     if (i < 0 && j > 4 - 1) canMove = false;
  //     if (i > 4 - 1 && j > 4 - 1) canMove = false;
  //     if (i < 0 && j < 0) canMove = false;
  //     if (i > 4 - 1 && j < 0) canMove = false;
  //     return canMove;
  //   };

  indexFunc = (index: number) => {
    if (index > 4 - 1) return 0;
    if (index < 0) return 4 - 1;
    return index;
  };
  constructor() {}

  public moveMax(numberPanel: NumberPanel, move_frequency: number) {
    let moveMaxNumberOnDirection = 0;
    for (let i = 0; i < numberPanel.length; i++) {
      for (let j = 0; j < numberPanel[i].length; j++) {
        let cuNumber = numberPanel[i][j];

        for (const [dr, dj] of this.positionChangeDirectionPatterns) {
          let rowI = this.indexFunc(i);
          let colI = this.indexFunc(j);

          const arr = [];
          arr.push(numberPanel[rowI][colI]);
          for (let n = 0; n < move_frequency; n++) {
            rowI = this.indexFunc(rowI + dr);
            colI = this.indexFunc(colI + dj);
            arr.push(numberPanel[rowI][colI]);
          }
          const numb = Number(arr.join(""));
          if (numb >= moveMaxNumberOnDirection) {
            moveMaxNumberOnDirection = numb;
          }
        }
      }
    }

    return moveMaxNumberOnDirection;
  }
}
