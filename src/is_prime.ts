const isPrime = (n: number): void => {
  const sqrtN: number = Math.floor(Math.sqrt(n));
  if (n === 1) {
    console.log("1より大きい整数を入力してください");
    return;
  }
  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) {
      console.log(`${n}は素数ではありません。`);
      return;
    }
  }
  console.log(`${n}は素数です。`);
};

for (let i = 1; i < 100; i++) {
  isPrime(i);
}
