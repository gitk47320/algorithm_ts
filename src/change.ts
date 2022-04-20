// おつりの硬貨とお札の数を最適化する
const change = (): void => {
  const price: number = 37281;
  const payment: number = 63854;
  let change = payment - price;
  const coins = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
  const changeBills = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (change < 0) {
    console.log("支払代金が不足しています");
  }
  for (const [index, num] of coins.entries()) {
    changeBills[index] = Math.floor(change / num);
    change = change - changeBills[index] * num;
    console.log(`${num}円は${changeBills[index]}枚`);
  }
  console.log(`おつりは${payment - price}円`);
};

change();
