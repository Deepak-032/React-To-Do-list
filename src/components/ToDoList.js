import React, { Component } from 'react'
import './ToDoList.css'

class ToDoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toDo: '',
            list: []
        }
    }

    changeHandler = (e) => {
        this.setState({
            toDo: e.target.value
        })
    }

    addHandler = (e) => {
        e.preventDefault()
        const list = [...this.state.list]
        const toDo = {
            id: null,
            value: this.state.toDo,
            isCompleted: false,
            edit: false
        }
        list.push(toDo)
        this.setState({
            list,
            toDo: ''
        })
    }

    markCompleteHandler(index) {
        const newToDo = [...this.state.list]
        newToDo[index].isCompleted = !newToDo[index].isCompleted
        this.setState({list: newToDo})
    }


    inputChangeHandler(index, e) {
        const newToDo = [...this.state.list]
        newToDo[index].value = e.target.value
        this.setState({list: newToDo})
    }

    editTaskHandler(index, e) {
        e.preventDefault()
        if (this.state.list[index].value) {
            const newToDo = [...this.state.list]
            newToDo[index].edit = !newToDo[index].edit
            this.setState({list: newToDo})
        } else {
            alert("Field cannot be empty")
        }
    }

    deleteTodoHandler(index, e) {
        e.preventDefault()
        const newToDo = [...this.state.list]
        newToDo.splice(index, 1)
        this.setState({list: newToDo})
    }

    render() {
        return (
            <div className="container">
                <h2>What needs to be done?</h2>
                <form onSubmit={this.addHandler}>
                    <input className="addTaskInput" value={this.state.toDo} onChange={this.changeHandler} placeholder="Add task..." autoFocus />
                    <button disabled={!this.state.toDo} className="addTaskButton" type="submit">Add to the list</button>
                </form><br />
                <div>
                    {this.state.list.length === 0 ? <li>Task 1</li> : ""}
                    {this.state.list.map((item, index) => {
                        item.id = index
                        return (
                            <li key={index}>
                                <div className="tasks" style={{ textDecoration: item.isCompleted ? "Line-through" : "", display: item.edit ? "none" : "" }}>
                                    <input type="checkbox" onClick={() => this.markCompleteHandler(index)} />
                                    &nbsp;<span>{item.value}</span>
                                </div>
                                <form style={{ width: item.edit ? "100%" : "" }}>
                                    <input className="toEditInput" value={item.value} onChange={this.inputChangeHandler.bind(this, index)} style={{ display: item.edit ? "inline-block" : "none" }} />
                                    <button type="submit" className="toEdit" onClick={this.editTaskHandler.bind(this, index)}>{item.edit ? <img src="outline_update_black_24dp.png" alt="update" /> : <img src="outline_edit_black_24dp.png" alt="edit" />}</button>
                                    <button className="delete" onClick={this.deleteTodoHandler.bind(this, index)}><img src="outline_delete_forever_black_24dp.png" alt="delete" /></button>
                                </form>
                            </li>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ToDoList
