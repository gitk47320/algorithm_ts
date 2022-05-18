const insertSort = (): void => {
  const data: number[] = [6, 15, 4, 2, 8, 5, 11, 9, 7, 13];
  for (let i = 1; i < data.length; i++) {
    const tmpdata = data[i];
    let j = i - 1;
    while (j >= 0 && data[j] > tmpdata) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j + 1] = tmpdata;
  }
  console.log(data);
};

insertSort();
