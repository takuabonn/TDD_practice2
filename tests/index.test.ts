import { NumberBox } from "../src/index";
describe("決めた方向にN-1回移動したときに通るマスを順番に並べた時の最大値を求める", () => {
  test("決めた方向に1回移動したときに通るマスを順番に並べた時の最大値を求める", () => {
    const numberPanel = [
      [1, 1, 6, 1],
      [1, 1, 1, 9],
      [7, 1, 1, 1],
      [1, 8, 1, 1],
    ];
    const numberBox = new NumberBox();

    expect(numberBox.moveMax(numberPanel, 1)).toBe(97);
  });
  test("決めた方向に2回移動したときに通るマスを順番に並べた時の最大値を求める", () => {
    const numberPanel = [
      [1, 1, 6, 1],
      [1, 1, 1, 9],
      [7, 1, 1, 1],
      [1, 8, 1, 1],
    ];
    const numberBox = new NumberBox();

    expect(numberBox.moveMax(numberPanel, 2)).toBe(978);
  });
});
