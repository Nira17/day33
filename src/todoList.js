import React from "react";
import TodoListItem from "./todoListItem";
import "./todolist.css"

function TodoItemData(id, text, active, timestamp) {
    if (text.length === 0) throw new Error("you cannot pass a todo item without text")

    this.id = id;
    this.text = text;
    this.active = active;
    this.timestamp = timestamp;
}


export default class TodoList extends React.Component {
    state = {
        newItem: "",
        todos: [
            new TodoItemData(123, "ir a la compra", true, new Date()),
            new TodoItemData(456, "ir a la compra", true, new Date()),
            new TodoItemData(789, "reservar en el restaurante", true, new Date())
        ]
    }

    removeItemFunction = (todoId) => {
        let newState = {
            ...this.state
        }

        newState.todos = newState.todos.filter((todoItem) => {
            return todoItem.id !== todoId
        })

        this.setState(newState)
    }

    addItem = () => {
        let newTodoItemText = this.state.newItem

        let newState = {
            ...this.state,
            newItem: ""
        }
        
        let newItem = new TodoItemData(Math.floor(Math.random() * 1000), newTodoItemText, true, new Date())

        newState.todos.push(newItem)

        this.setState(newState)
    }

    newItemChangeHandler = (e) => {
        let newState = {
            ...this.state,
            newItem: e.target.value
        }

        this.setState(newState)
    }

    render() {
        return (
            <section class="todolist">
                <h2>My todo list items ({this.state.todos.length}) for today</h2>
                {
                    (this.state.todos.length === 0) ? <p>You have no more items</p> : ""
                }

                <input type="text" value={this.state.newItem} onChange={this.newItemChangeHandler}></input>
                <button onClick={this.addItem}>Add item</button>

                <ol>
                    {
                        this.state.todos.map((todo) => <TodoListItem key={todo.id} text={todo.text} handlerFunction={this.removeItemFunction}></TodoListItem>)
                    }
                </ol>
            </section>
        )
    }
}