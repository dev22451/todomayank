import React from 'react'
import './../App.css'

const TodoInput = (props) => {
    const{handleInputValue,handleTodoInput,inputValue} = props;
    return(
        <div>
            <input 
                type="text" 
                className="inputfield"
                value={inputValue}
                placeholder="Add Your Task" 
                onChange={handleInputValue}/>

            <button
                className="btn"
                onClick={handleTodoInput}>Add Task</button>
        </div>
);
}
export default TodoInput;