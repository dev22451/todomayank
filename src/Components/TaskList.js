import React from 'react'
import '../App.css'

const TaskList = (props) => {
    const {todoList, handleCheck} = props;

    return(
        <div>
            {
                todoList.map((list, index) => {
                    const{taskname, isChecked} = list
                    return(
                        <div className='list' key={index}>
                            <input type="checkbox" className="check" checked={isChecked} onChange={()=>{handleCheck(index)}}/>
                            {taskname}
                            {isChecked === true && <span className="complete" style={{color:'#fff'}}>Completed</span>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TaskList;