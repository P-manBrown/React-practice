import React,{useState} from 'react';
import './App.css';
import axios from 'axios';
import { Todo } from './Todo';

// typeは大文字から始めると良い
// typeで型の指定を行う
// セミコロンで区切る
type TodoType = {
  "userId": number;
  "id": number;
  "title": string;
  "completed": boolean;
};

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
      <button onClick={onCliCkFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
         />
      ))}
    </div>
  );
}

export default App;
