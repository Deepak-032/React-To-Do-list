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
        list.push(<li key={Math.random()}><input type="checkbox" /> {this.state.toDo}</li>)
        this.setState({
            list,
            toDo: ''
        })
    }

    render() {
        return (
            <div className="container">
                <h2>What needs to be done?</h2>
                <form onSubmit={this.addHandler}>
                    <input value={this.state.toDo} onChange={this.changeHandler} placeholder="Add task..." autoFocus />
                    <button type="submit">Add to the list</button>
                </form><br />
                <div>{this.state.list}</div>
            </div>
        )
    }
}

export default ToDoList
