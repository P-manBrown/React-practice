
export type User = {
  name: string;
  // hobbiesはない可能性もあるので?をつける
  // 配列のstring
  hobbies?: Array<string>;
}