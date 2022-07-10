type numberList = number[];
type numberPanel = numberList[];

export class NumberBox {
  private maxResultNumberWithMoving: number;
  public numberPanel: numberPanel;
  constructor(number_panel: numberPanel) {
    this.maxResultNumberWithMoving = 9;
    this.numberPanel = number_panel;
  }

  getMaxResultNumberWithMoving() {
    let preliminaryMaxNumber = 0;
    for (let i = 0; i < this.numberPanel.length; i++) {
      const numberList = this.numberPanel[i];
      for (let j = 0; j < numberList.length; j++) {
        if (preliminaryMaxNumber < numberList[j]) {
          preliminaryMaxNumber = numberList[j];
        }
      }
    }
    this.maxResultNumberWithMoving = preliminaryMaxNumber;
    return this.maxResultNumberWithMoving;
  }
}
