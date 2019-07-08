import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InputComponent } from './Components/Input Component';
import { TodoListComponent } from './Components/Todo List Component';
// import 

interface AppState {
  listArray: string[];
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      listArray: []
    }
  }

  todoAdded = (todo: string) => {
    const addtodo = [...this.state.listArray, todo];
    this.setState({
      listArray: addtodo
    });
  };

  deleteTodo = (todo: string) => {
    const todos = this.state.listArray.filter(todos => {
      return todos !== todo;
    });
    this.setState({
      listArray: todos
    });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <InputComponent onChange={this.todoAdded} />

          <TodoListComponent
            todos={this.state.listArray}
            onDelete={this.deleteTodo}
          />

          {/* <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}


export default App;
