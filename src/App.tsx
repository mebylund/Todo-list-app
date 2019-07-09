import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InputComponent } from './Components/Input Component';
import { TodoListComponent } from './Components/Todo List Component';
import { TodoItem } from './Types/todo-item';
// import 

interface AppState {
  listArray: TodoItem[];
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      listArray: [
        {
          id: 'asdfs-1dfdsfs-12321',
          title: 'Groceries',
          description: 'Get my groceries'
        }
      ]
    }
  }

  todoAdded = (todo: TodoItem) => {
    const addtodo = [...this.state.listArray, todo];
    this.setState({
      listArray: addtodo
    });
  };

  deleteTodo = (todo: TodoItem) => {
    const todos = this.state.listArray.filter(todoA => {
      return todoA.id !== todo.id;
    });
    this.setState({
      listArray: todos
    });
  }

  handleEditDes = (todo: TodoItem) => {
    var newDes = [...this.state.listArray].map(item => {
      if(item.title === todo.title){
        item = {...todo};
      }
      return item

    });
    this.setState({
      listArray: newDes
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
            editDes={this.handleEditDes}                 

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
