import { NumberBox } from "../src/index";

describe("number box", () => {
  describe("特定の数字パネルを１マス移動を n-1 回繰り返した時の最大数", () => {
    const numberPanel = [
      [1, 1, 6, 1],
      [1, 1, 1, 9],
      [7, 1, 1, 1],
      [1, 8, 1, 1],
    ];

    test("数字パネル１マス移動を一回する時の最大数を求める", () => {
      const numberBox = new NumberBox(numberPanel, 1);

      const maxResultNumbersWithMoving =
        numberBox.getMaxResultNumbersWithMoving();
      expect(maxResultNumbersWithMoving[0]).toBe(9);
    });

    test("数字パネル１マス移動を二回する時のそれぞれの最大数を配列で返す", () => {
      const numberBox = new NumberBox(numberPanel, 2);
      const maxResultNumbersWithMoving =
        numberBox.getMaxResultNumbersWithMoving();
      expect(maxResultNumbersWithMoving[0]).toBe(9);
      expect(maxResultNumbersWithMoving[1]).toBe(6);
    });
  });
});
