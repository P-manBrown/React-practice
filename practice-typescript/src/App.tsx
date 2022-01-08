import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const onCliCkFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      console.log(res);
    })
  }
  return (
    <div className="App">
      <button onClick={onCliCkFetchData}>データ取得</button>
    </div>
  );
}

export default App;
