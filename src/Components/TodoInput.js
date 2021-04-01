import React from 'react'
import './../App.css'

const TodoInput = () => {
    return(
        <div>
            <input type="text" className="inputfield"/>
            <button className="btn">Add Task</button>
        </div>
);
}
export default TodoInput;