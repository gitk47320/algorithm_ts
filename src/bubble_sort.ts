const bubbleSort = (): void => {
  const data: number[] = [6, 15, 4, 2, 8, 5, 11, 9, 7, 13];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j - 1] > data[j]) {
        const tmp = data[j - 1];
        data[j - 1] = data[j];
        data[j] = tmp;
      }
    }
  }
  console.log(data);
};

bubbleSort();
