import React,{useState} from 'react';
import './App.css';
import axios from 'axios';
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { Text } from './Text';
import { UserProfile } from './UserProfile';

// typeは大文字から始めると良い
// typeで型の指定を行う
// セミコロンで区切る
// type TodoType = {
//   "userId": number;
//   "id": number;
//   "title": string;
//   "completed": boolean;
// };

const user = {
  name: "田中",
  // hobbies: ["読書", "筋トレ"],
}

function App() {
  // stateに対する型指定
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onCliCkFetchData = () => {
    // 取得データの型定義
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <UserProfile
        user={user}
      />
      <Text
        color="red"
        fontSize="18px"
      />
      <button onClick={onCliCkFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
         />
      ))}
    </div>
  );
}

export default App;
