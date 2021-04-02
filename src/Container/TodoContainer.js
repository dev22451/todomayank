import React from 'react'
import {TodoInput, TaskList} from '../Components'

class TodoContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // States for inputValue & list
            inputValue: '',
            todoList: [],
        }
    }

    handleInputValue(e){
        // changing state for inputValue
        this.setState({
            inputValue: e.target.value
        })
    }

    handleTodoInput(){
        // writing the logics for inserting the inputValues in todoList array
        const {todoList, inputValue} = this.state;
        let refTodoList = todoList;

        refTodoList.push({
            taskname: inputValue,
        })
        this.setState({
            todoList:refTodoList,
            inputValue:''
        })
    }

    render(){
        const {inputValue, todoList} = this.state;
        
        return(
            <div>
                <TodoInput 
                    inputValue={inputValue}
                    handleInputValue={this.handleInputValue}
                    handleTodoInput={this.handleTodoInput}/>
                
                <TaskList todoList={todoList}/>
            </div>
        )
    }
}

export default TodoContainer;