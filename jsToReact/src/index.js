// const,let等の変数宣言

// 以前はvarが使用されていた
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);


// var変数は意図しない上書きや再宣言が発生する可能性があるため、以下を使用するようになった

// let変数
let val2 = "let変数";
console.log(val2);

// let変数は上書き可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可
// src/index.js:25:4: Identifier 'val2' has already been declared. (25:4)のエラー発生
// let val2 = "let変数を再宣言"

// const変数
const val3 = "const変数";
console.log(val3);
// const変数は上書き不可
// TypeError: "val3" is read-onlyのエラー発生
// val3 = "const変数上書き";

// const変数は再宣言不可
// src/index.js:39:6: Identifier 'val3' has already been declared. (39:6)のエラー発生
// const val3 = "const変数を再宣言"

// constで定義したオブジェクトの要素は更新することができる
const val4 = {
  name: "田中",
  age: 30,
};
// console.log(val4);
// 変更
val4.name = "Tanaka";
// 追加
val4.addres = "東京都";
console.log(val4);

// 変数宣言はconstを使用することがほとんど

// constで定義した配列についても要素を変更することができる
const val5 = [ 'dog', 'cat' ];
// 変更
val5[0] = "犬";
// 追加
val5.push(`bird`);
console.log(val5);