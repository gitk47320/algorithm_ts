// 普通に求めてみる
const isPrime = (n: number): void => {
  const sqrtN: number = Math.floor(Math.sqrt(n));
  const numberList: number[] = [];
  for (let i = 1; i <= n; i++) {
    numberList[i - 1] = i;
  }

  if (n === 1) {
    console.log("1より大きい整数を入力してください");
    return;
  }

  let compositList: number[] = [];

  for (let i = 3; i <= n; i++) {
    for (let j = 2; j <= sqrtN; j++) {
      if (i % j === 0 && i > j) {
        compositList.push(i);
        continue;
      }
    }
  }
  compositList = Array.from(new Set(compositList));
  let primeList = numberList.filter(
    (num) => compositList.indexOf(num) === -1
  );
  primeList = primeList.filter((num) => num !== 1);
  console.log(primeList);
};

isPrime(100);

// エラトステネスの篩
const sieveOfEratosthenes = (n: number): void => {
  const sqrtN: number = Math.floor(Math.sqrt(n));
  if (n === 1) {
    console.log("1より大きい整数を入力してください");
    return;
  }

  const primeList: number[] = [];
  let oddList: number[] = [];

  primeList[0] = 2;

  for (let i = 3; i <= n; i++) {
    if (i % 2 !== 0) {
      oddList.push(i);
    }
  }

  while (sqrtN >= oddList[0]) {
    primeList.push(oddList[0]);
    oddList = oddList.filter((num) => num % oddList[0] !== 0);
  }

  console.log(primeList.concat(oddList));
};

sieveOfEratosthenes(100);
