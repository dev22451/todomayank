import React from 'react'
import '../App.css'
import { FaTrashAlt } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { FaPencilAlt } from 'react-icons/fa';

const TaskList = (props) => {
    const {todoList, handleCheck, handleDelete} = props;

    return(
        <div>
            {
                todoList.map((list, index) => {
                    const{taskname, isChecked} = list
                    return(
                        <div className='list' key={index}>
                            <input type="checkbox" className="check" checked={isChecked} onChange={()=>{handleCheck(index)}}/>
                            {taskname}
                            
                            {isChecked === true && <span style={{float:'right'}} onClick={()=>{handleDelete(index)}}><FaTrashAlt /></span>}
                            {isChecked === true && <span className="complete" style={{color:'#fff',marginRight:'15px'}}><FaPencilAlt /></span>}
                            {isChecked === true && <span className="complete" style={{color:'#fff',marginRight:'15px'}}><GiCheckMark /></span>}
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TaskList;