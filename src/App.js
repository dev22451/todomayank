import './App.css';
import TaskList from './Components/TaskList.js'
import TodoInput from './Components/TodoInput.js'

function App() {
  return (
    <div className="App">
      
      <div className="heading">Todo App</div>

      <TaskList/>
      <TodoInput/>

    </div>
  );
}

export default App;
