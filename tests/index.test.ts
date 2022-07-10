import { NumberBox } from "../src/index";

describe("number box", () => {
  describe("特定の数字パネルを１マス移動を n-1 回繰り返した時の最大数", () => {
    const A = [
      [1, 1, 6, 1],
      [1, 1, 1, 9],
      [7, 1, 1, 1],
      [1, 8, 1, 1],
    ];

    test("数字パネル１マス移動を一回する時の最大数を求める", () => {
      const numberBox = new NumberBox();
      const maxResultNumberWithMoving = numberBox.maxResultNumberWithMoving;

      expect(maxResultNumberWithMoving).toBe(9);
    });
  });
});
