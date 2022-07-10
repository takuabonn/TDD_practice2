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
    return this.maxResultNumberWithMoving;
  }
}
