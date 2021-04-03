import React from 'react'
import {TodoInput, TaskList} from '../Components'

class TodoContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // States for inputValue & list
            inputValue: '',
            todoList: [],
            filterText:'',
            alerttext:''
        }
        // Binding the constructor
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleTodoInput = this.handleTodoInput.bind(this);
        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handledit = this.handledit.bind(this);
    }

    // searchbar function
    handleFilterTextChange(e){
        const refList = this.state.todoList;
        const filterText = this.state.filterText;
        const rows = [];

        this.setState({
          filterText: e.target.value
        });

        refList.forEach((refLis) => {
            if(refLis.taskname.indexOf(filterText) === -1){
              return;
            }
            rows.push(refLis.taskname)
        });
        console.log(refList.concat([rows]))
    }
    
    handleInputValue(e){
        // changing state for inputValue
        this.setState({
            inputValue: e.target.value
        })
    }

    // task delete function
    handleDelete(index){
        let refList = this.state.todoList;
        refList.splice(index,1);

        this.setState({
            todoList: refList
        })
    }

    // todo input function
    handleTodoInput(){
        // writing the logics for inserting the inputValues in todoList array
        const {todoList, inputValue} = this.state;
        let refTodoList = todoList;
        if(inputValue.length>4){
            refTodoList.push({
                taskname: inputValue,
                isChecked: false
            })
        }else {
            this.setState({
                alerttext:'*required 5 characters minimum'
            })
        }
        this.setState({
            todoList:refTodoList,
            inputValue:''
        })
    }

    // checkbox function
    handleCheck(index) {

        let refList = this.state.todoList;
        
        if(!refList[index].isChecked)
            refList[index].isChecked = true
        else
            refList[index].isChecked = false

        this.setState({
            todoList: refList
        })
    }

    // edit function
    handledit(index){
        let refList = this.state.todoList;
        refList[index].taskname =prompt('do you want to change : '+refList[index].taskname);
    }

    render(){
        const {inputValue, todoList, filterText, alerttext} = this.state;
        
        return(
            <div>
                <TodoInput 
                    inputValue={inputValue}
                    filterText={filterText}
                    handleInputValue={this.handleInputValue}
                    handleTodoInput={this.handleTodoInput}
                    handleFilterTextChange={this.handleFilterTextChange}
                    alerttext={alerttext}/>
                
                <TaskList 
                    todoList={todoList} 
                    handleCheck={this.handleCheck} 
                    handleDelete={this.handleDelete}
                    handledit={this.handledit}/>
            </div>
        )
    }
}

export default TodoContainer;