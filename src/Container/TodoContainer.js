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
        // Binding the constructor
        this.handleTodoInput = this.handleTodoInput.bind(this);
        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleInputValue(e){
        // changing state for inputValue
        this.setState({
            inputValue: e.target.value
        })
    }

    handleDelete(index){
        let refList = this.state.todoList;
        refList.splice(index,1);

        this.setState({
            todoList: refList
        })
    }

    handleTodoInput(){
        // writing the logics for inserting the inputValues in todoList array
        const {todoList, inputValue} = this.state;
        let refTodoList = todoList;

        refTodoList.push({
            taskname: inputValue,
            isChecked: false
        })
        this.setState({
            todoList:refTodoList,
            inputValue:''
        })
    }

    handleCheck (index) {

        let refList = this.state.todoList;
        
        if(!refList[index].isChecked)
            refList[index].isChecked = true
        else
            refList[index].isChecked = false

        this.setState({
            todoList: refList
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
                
                <TaskList todoList={todoList} handleCheck={this.handleCheck} handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default TodoContainer;