import { maxNumber } from "../src/index";

describe("number box", () => {
  test("数字パネルの最大数を求める", () => {
    const numberPanel = [
      [1, 1, 6, 1],
      [1, 1, 1, 9],
      [7, 1, 1, 1],
      [1, 8, 1, 1],
    ];
    expect(maxNumber(numberPanel)).toBe(9);
  });
});
