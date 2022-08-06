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

    expect(numberBox.moveMax(numberPanel, 1, numberPanel.length)).toBe(97);
  });
  test("決めた方向に2回移動したときに通るマスを順番に並べた時の最大値を求める", () => {
    const numberPanel = [
      [1, 1, 6, 1],
      [1, 1, 1, 9],
      [7, 1, 1, 1],
      [1, 8, 1, 1],
    ];
    const numberBox = new NumberBox();

    expect(numberBox.moveMax(numberPanel, 2, numberPanel.length)).toBe(978);
  });
  test("決めた方向にn-1回移動したときに通るマスを順番に並べた時の最大値を求める", () => {
    const numberPanel = [
      [1, 1, 6, 1],
      [1, 1, 1, 9],
      [7, 1, 1, 1],
      [1, 8, 1, 1],
    ];
    const numberBox = new NumberBox();

    expect(numberBox.moveMax(numberPanel, 3, numberPanel.length)).toBe(9786);
  });
  test("nが最大値の時に決めた方向にn-1回移動したときに通るマスを順番に並べた時の最大値を求める", () => {
    const numberPanel = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
    const numberBox = new NumberBox();

    expect(numberBox.moveMax(numberPanel, 9, numberPanel.length)).toBe(
      1111111111
    );
  });
  test("indexFuncの動作確認", () => {
    const numberPanel = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
      [9, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
    const numberBox = new NumberBox();

    expect(numberBox.moveMax(numberPanel, 9, numberPanel.length)).toBe(
      9911111111
    );
  });
});
