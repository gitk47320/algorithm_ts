// 10進数→n進数(n=2~9)
const decimalToRadixConversion = (decimal: number, radix: number): number => {
  let conv: string = "";
  if (decimal === 0) conv = "0";

  while (decimal !== 0) {
    conv = conv + (decimal % radix).toString();
    decimal = Math.floor(decimal / radix);
  }
  return Number(conv.split("").reverse().join(""));
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

// 例：10進数の19を3進数に変換する。
console.log(decimalToRadixConversion(19, 3));
console.log(binaryToDecimal("10011"));
