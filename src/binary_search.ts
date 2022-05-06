const binarySearch = (num: number):void => {
  const data:number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  let start_idx:number = 0;
  let end_idx:number = data.length - 1;
  
  while (start_idx <= end_idx) {
    let center_idx = Math.floor((end_idx + start_idx) / 2)
    if (data[center_idx] === num) {
      console.log(`${num}は${center_idx + 1}番目にありました`)
      break
    } else if (data[center_idx] > num) {
      end_idx = center_idx - 1
    } else {
      start_idx = center_idx + 1
    }
  }
}

binarySearch(90)