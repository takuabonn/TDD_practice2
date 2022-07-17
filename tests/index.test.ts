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
  test("初回の最大数の位置かsら数字パネルを1回移動する時に通るマスを順番に並べた時の最大数を返す", () => {
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
    expect(maxNumber(1, numberPanel, max_number_positionArr, "9")).toBe(98);
  });
  test("初回の最大数の位置かsら数字パネルをn-1回移動する時に通るマスを順番に並べた時の最大数を返す", () => {
    const numberPanel = [
      [1, 1, 6, 1],
      [1, 1, 1, 9],
      [7, 1, 1, 1],
      [1, 8, 1, 1],
    ];
    const max_number_positionArr = maxNumberPositionArr(numberPanel);
    console.log(max_number_positionArr);
    expect(maxNumber(3, numberPanel, max_number_positionArr, "9")).toBe(9786);
  });
});
