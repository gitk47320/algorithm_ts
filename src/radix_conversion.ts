// 10進数→2進数
const decimalToBinary = (decimal: number): number => {
  let binary: string = "";
  // 10進数→2進数変換
  if (decimal === 0) binary = "0";

  while (decimal !== 0) {
    binary = binary + (decimal % 2).toString();
    decimal = Math.floor(decimal / 2);
  }
  return Number(binary.split("").reverse().join(""));
};

// 2進数→10進数
// 引数がstringなのは、0bを接頭辞に入れなくてもいいようにするため
const binaryToDecimal = (binary: string): number => {
  const binaryArray: number[] = [];
  for (let i = 0; i < binary.length; i++) {
    binaryArray[i] = Number(binary.split("")[i]);
  }
  let num: number = 0;
  for (const [i, n] of binaryArray.entries()) {
    num = num + n * 2 ** (binaryArray.length - 1 - i);
  }
  return num;
};

console.log(decimalToBinary(19));
console.log(binaryToDecimal("10011"));
