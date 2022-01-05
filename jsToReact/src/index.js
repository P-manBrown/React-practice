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


// テンプレート文字列
const name = "田中";
const age = 30;
// 「私の名前は田中です。年齢は30歳です。」を出力したい
// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);


// アロー関数
// 従来の関数
function func1(str) {
  return str;
}
console.log(func1("func1が出力されています"));
// "func1が出力されています"

// 関数を変数に格納してから使用する
const func2 = function(str) {
  return str;
}
console.log(func2("func2が出力されています"));
// "func2が出力されています"

// アロー関数
const func3 = (str) => {
  return str;
}
console.log(func3("func3が出力されています"))
// "func3が出力されています"
// アロー関数の注意点
// 引数が一つの場合には引数の()は省略することができる。
// 単一式の場合returnを省略し、以下のように記述することができる
const func4 = (str) => str;

const func5 = ( num1, num2 ) => num1 + num2;
console.log(func5( 30, 40 ));


// 分割代入

// 分割代入を使用しない場合
const myProfile = {
  name2: "田中",
  age2: 40,
};
const message3 = `名前は${myProfile.name2}です。年齢は${myProfile.age2}です。`;
console.log(message3);
// 名前は田中です。年齢は40です。

// 分割代入を使用することで上記のmyProfileを省略することができる
const { name2, age2 } = myProfile;
const message4 = `名前は${name2}です。年齢は${age2}です。`;
console.log(message4);
// 名前は田中です。年齢は40です。
// 分割代入を使用することで記述を簡潔にすることができる

// 分割代入は配列でも使用することができる
const myProfile2 = [ '田中', 40 ];
const message5 =  `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
console.log(message5);
// 名前は田中です。年齢は40です。

// 分割代入は配列でも使用することができる
const [ name3, age3 ] = myProfile2;
const message6 = `名前は${name3}です。年齢は${age3}です。`;
console.log(message6);
// 名前は田中です。年齢は40です。


// デフォルト値
const sayHello = (name) => console.log(`こんにちは!${name}さん!`);
sayHello("田中");
// こんにちは!田中さん!
// 引数を削除すると
sayHello();
// こんにちは!undefinedさん!
// undefinedはエラーが発生する可能性を高めてしまうためデフォルト値を設定する
const sayHello2 = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
sayHello2();
// こんにちは!ゲストさん!
sayHello2("田中");
// こんにちは!田中さん!


