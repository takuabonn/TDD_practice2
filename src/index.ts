type numberList = number[];
type numberPanel = numberList[];
export const maxNumber = (numberPanel: numberPanel) => {
  let max_number = 0;
  for (let i = 0; i < numberPanel.length; i++) {
    for (let j = 0; j < numberPanel[i].length; j++) {
      const curent_number = numberPanel[i][j];
      if (curent_number < max_number) {
        continue;
      }
      max_number = curent_number;
    }
  }
  return max_number;
};
