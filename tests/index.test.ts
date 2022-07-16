import { maxNumber } from "../src/index";

describe("number box", () => {
  test("数字パネルの最大数が複数ある時最大数の位置(i,j)の配列を返す", () => {
    const numberPanel = [
      [1, 9, 6, 1],
      [1, 1, 1, 9],
      [7, 1, 1, 1],
      [1, 8, 1, 1],
    ];
    const max_number_arr = maxNumber(numberPanel);
    expect(max_number_arr.length).toBe(2);
    expect(max_number_arr[0]).toEqual(expect.arrayContaining([0, 1]));
    expect(max_number_arr[1]).toEqual(expect.arrayContaining([1, 3]));
  });
});
