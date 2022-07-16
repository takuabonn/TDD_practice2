type numberList = number[];
type numberPanel = numberList[];
interface MaxNumberPositionArr {
  number: number;
  i: number;
  j: number;
}
export const maxNumber = (numberPanel: numberPanel) => {
  let max_number = Math.max(...numberPanel.flat());
  const maxNumberPositionArr = [];
  for (let i = 0; i < numberPanel.length; i++) {
    for (let j = 0; j < numberPanel[i].length; j++) {
      const curent_number = numberPanel[i][j];
      if (curent_number !== max_number) {
        continue;
      }
      maxNumberPositionArr.push([i, j]);
    }
  }
  return maxNumberPositionArr;
};
