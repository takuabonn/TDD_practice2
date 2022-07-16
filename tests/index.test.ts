import { maxNumberPositionArr, maxNumber } from "../src/index";

describe("number box", () => {
  test("数字パネルの最大数が複数ある時最大数の位置(i,j)の配列を返す", () => {
    const numberPanel = [
      [1, 9, 6, 1],
      [1, 1, 1, 9],
      [7, 1, 1, 1],
      [1, 8, 1, 1],
    ];
    const max_number_positionArr = maxNumberPositionArr(numberPanel);
    expect(max_number_positionArr.length).toBe(2);
    expect(max_number_positionArr[0]).toEqual(expect.arrayContaining([0, 1]));
    expect(max_number_positionArr[1]).toEqual(expect.arrayContaining([1, 3]));
  });
  describe("初回の最大数の位置から数字パネルを１回移動する時に通るマスを順番に並べた時の最大数を返す", () => {
    test("数字パネルを１回移動する時に通るマスを順番に並べた時の数を返す", () => {
      const numberPanel = [
        [1, 9, 6, 1],
        [1, 1, 1, 9],
        [7, 1, 1, 1],
        [1, 8, 1, 1],
      ];
      const max_number_positionArr = [
        [0, 1],
        [1, 3],
      ];
      expect(maxNumber(numberPanel, max_number_positionArr, "9")).toBe(98);
    });
  });
});
