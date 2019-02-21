import React, { Component } from 'react';
import './App.css';
import 'reset-css';
import TodoList from './todoList';

class App extends Component {
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <TodoList></TodoList>
        </header>
      </div>
    );
  }
}

export default App;
