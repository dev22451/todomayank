import './App.css';
import TaskList from './Components/TaskList.js'
import TodoInput from './Components/TodoInput.js'

function App() {
  return (
    <div className="App">
      
      <div><h2>Todo App</h2></div>

      <TaskList/>
      <TodoInput/>

    </div>
  );
}

export default App;
