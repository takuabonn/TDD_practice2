type numberList = number[];
type numberPanel = numberList[];

export class NumberBox {
  private maxResultNumbersWithMoving: number[];
  private movingNumber: number;
  public numberPanel: numberPanel;
  private currentMaxNumberPositionRow: number;
  private currentMaxNumberPositionCol: number;

  constructor(number_panel: numberPanel, moving_number: number) {
    this.maxResultNumbersWithMoving = [];
    this.numberPanel = number_panel;
    this.movingNumber = moving_number;
    this.currentMaxNumberPositionRow = 0;
    this.currentMaxNumberPositionCol = 0;
  }

  getMaxResultNumbersWithMoving() {
    let preliminaryMaxNumber = 0;
    for (let n = 0; n < this.movingNumber; n++) {
      if (n === 0) {
        for (let i = 0; i < this.numberPanel.length; i++) {
          const numberList = this.numberPanel[i];
          for (let j = 0; j < numberList.length; j++) {
            if (preliminaryMaxNumber < numberList[j]) {
              preliminaryMaxNumber = numberList[j];
              this.currentMaxNumberPositionRow = i;
              this.currentMaxNumberPositionCol = j;
            }
          }
        }
        this.maxResultNumbersWithMoving.push(preliminaryMaxNumber);
      }
      const { number, rowIndex, colIndex } = this.decideMovingDestination();
      this.currentMaxNumberPositionRow = rowIndex;
      this.currentMaxNumberPositionCol = colIndex;
      this.maxResultNumbersWithMoving.push(number);
    }

    return this.maxResultNumbersWithMoving;
  }

  private decideMovingDestination() {
    const movedToRowDirectionNumber = this.moveToRowDirection();
    const movedToColumnDirectionNumber = this.moveToColumnDirection();
    const movedToRowAndPlusColumnDirectionNumber =
      this.moveToRowAndPlusColumnDirection();
    const movedToRowAndMinseColumnDirectionNumber =
      this.moveToRowAndMinseColumnDirection();

    let destinationObjectArr = [
      movedToRowDirectionNumber,
      movedToColumnDirectionNumber,
      movedToRowAndPlusColumnDirectionNumber,
      movedToRowAndMinseColumnDirectionNumber,
    ];
    destinationObjectArr.sort((destinationObject, nextDestinationObject) => {
      return destinationObject.number - nextDestinationObject.number;
    });

    return destinationObjectArr[destinationObjectArr.length - 1];
  }

  private moveToRowDirection() {
    const plusRowDirectionIndex = this.currentMaxNumberPositionRow + 1;
    const minseRowDirectinIndex = this.currentMaxNumberPositionRow - 1;
    const plusRowDirectionNumber =
      this.numberPanel[plusRowDirectionIndex]?.[
        this.currentMaxNumberPositionCol
      ];
    const minseRowDirectinNumber =
      this.numberPanel[minseRowDirectinIndex]?.[
        this.currentMaxNumberPositionCol
      ];

    if (plusRowDirectionNumber > minseRowDirectinNumber) {
      return {
        number: plusRowDirectionNumber,
        rowIndex: plusRowDirectionIndex,
        colIndex: this.currentMaxNumberPositionCol,
      };
    }
    return {
      number: minseRowDirectinNumber,
      rowIndex: minseRowDirectinIndex,
      colIndex: this.currentMaxNumberPositionCol,
    };
  }
  private moveToColumnDirection() {
    const plusColDirectionIndex = this.currentMaxNumberPositionCol + 1;
    const minseColDirectinIndex = this.currentMaxNumberPositionCol - 1;
    const plusColDirectionNumber =
      this.numberPanel[this.currentMaxNumberPositionRow][plusColDirectionIndex];
    const minseColDirectinNumber =
      this.numberPanel[this.currentMaxNumberPositionRow][minseColDirectinIndex];

    if (plusColDirectionNumber > minseColDirectinNumber) {
      return {
        number: plusColDirectionNumber,
        rowIndex: this.currentMaxNumberPositionRow,
        colIndex: plusColDirectionIndex,
      };
    }
    return {
      number: minseColDirectinNumber,
      rowIndex: this.currentMaxNumberPositionRow,
      colIndex: minseColDirectinIndex,
    };
  }
  private moveToRowAndPlusColumnDirection() {
    const plusRowDirectionIndex = this.currentMaxNumberPositionRow + 1;
    const minseRowDirectinIndex = this.currentMaxNumberPositionRow - 1;
    const plusColDirectionIndex = this.currentMaxNumberPositionCol + 1;

    const plusRowAndPulusColDirectionNumber =
      this.numberPanel[plusRowDirectionIndex]?.[plusColDirectionIndex];
    const minseRowAndPlusColDirectinNumber =
      this.numberPanel[minseRowDirectinIndex]?.[plusColDirectionIndex];

    if (plusRowAndPulusColDirectionNumber > minseRowAndPlusColDirectinNumber) {
      return {
        number: plusRowAndPulusColDirectionNumber,
        rowIndex: plusRowDirectionIndex,
        colIndex: plusColDirectionIndex,
      };
    }
    return {
      number: minseRowAndPlusColDirectinNumber,
      rowIndex: minseRowDirectinIndex,
      colIndex: plusColDirectionIndex,
    };
  }

  private moveToRowAndMinseColumnDirection() {
    const plusRowDirectionIndex = this.currentMaxNumberPositionRow + 1;
    const minseRowDirectinIndex = this.currentMaxNumberPositionRow - 1;
    const minseColDirectinIndex = this.currentMaxNumberPositionCol - 1;

    const plusRowAndMinseColDirectionNumber =
      this.numberPanel[plusRowDirectionIndex]?.[minseColDirectinIndex];
    const minseRowAndMinseColDirectinNumber =
      this.numberPanel[minseRowDirectinIndex]?.[minseColDirectinIndex];

    if (plusRowAndMinseColDirectionNumber > minseRowAndMinseColDirectinNumber) {
      return {
        number: plusRowAndMinseColDirectionNumber,
        rowIndex: plusRowDirectionIndex,
        colIndex: minseColDirectinIndex,
      };
    }
    return {
      number: minseRowAndMinseColDirectinNumber,
      rowIndex: minseRowDirectinIndex,
      colIndex: minseColDirectinIndex,
    };
  }
}
