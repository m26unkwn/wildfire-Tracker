import React,{useState} from 'react';
import './App.css';

function App() {
   const [list , setList] = useState([]);
   const [input, setInput]=useState('');

   const addList=(e)=>{
     e.preventDefault();
     setList([...list, input]);
     setInput('');
   }
  return (
    <div className="App">
      <header>
      <h1>To Do App</h1>

      </header>
      <form  onSubmit={addList} >
      <input value={input} onChange={event=>setInput(event.target.value)} />
      <button type="submit" onClick={addList}> Add</button>
      </form>
      <div className="todo-container">
      <ul>
        {list.map(todo=>(<li className="todo-list">{todo}</li>))}
      </ul>
      </div>
    </div>
  );
}

export default App;
