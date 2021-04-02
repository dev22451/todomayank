import React from 'react'

const TaskList = (props) => {
    const {todoList, handleCheck} = props;

    return(
        <div>
            {
                todoList.map((list, index) => {
                    const{taskname, isChecked} = list
                    return(
                        <div>
                            <input type="checkbox" checked={isChecked} onChange={()=>{handleCheck(index)}}/>
                            {taskname}
                            {isChecked === true && <span style={{color:'red'}}>Completed</span>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TaskList;