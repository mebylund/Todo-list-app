import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InputComponent } from './Components/Input Component';
import { TodoListComponent } from './Components/Todo List Component';
import { TodoItem } from './Types/todo-item';
import { DeletedListComponent } from './Components/Deleted List Component';
import { SortingComponent } from './Components/Sorting Component';
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
          description: 'Get my groceries',
          isActive: true,
          dateCreated: new Date()
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

  reAdd = (todo: TodoItem) => {
    const todos = this.state.listArray.map(todoA => {
      if (todoA.id === todo.id) {
        todo.isActive = true;
      };
      return todoA;
    });
    this.setState({
      listArray: todos
    });
  }


  deleteTodo = (todo: TodoItem) => {
    const todos = this.state.listArray.map(todoA => {
      if (todoA.id === todo.id) {
        todoA.isActive = false;
      };
      return todoA;
    });
    this.setState({
      listArray: todos
    });
  }

  handleEditDes = (todo: TodoItem) => {
    var newDes = [...this.state.listArray].map(item => {
      if (item.title === todo.title) {
        item = { ...todo };
      }
      return item

    });
    this.setState({
      listArray: newDes
    });
  }

  changeSort = (sortType: string) => {
    if (sortType === 'alphabetically') {
      this.alphabetically();
    }
    if (sortType === 'revalpha'){
      this.revalpha();
    }
    if (sortType === 'datecreated'){
      this.datecreated();
    }
  };

  alphabetically = () => {
    var sortAplpha = [...this.state.listArray].sort((a:TodoItem, b:TodoItem) => {
      return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
    });
    this.setState({
      listArray: sortAplpha
    })
  }
  revalpha = () => {
    var sortrevAplpha = [...this.state.listArray].sort((a:TodoItem, b:TodoItem) => {
      return a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1;
    });
    this.setState({
      listArray: sortrevAplpha
    })
  }
  datecreated = () => {
    var sortrevAplpha = [...this.state.listArray].sort((a:TodoItem, b:TodoItem) => {
      return a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1;
    });
    this.setState({
      listArray: sortrevAplpha
    })
  }

  

  public render() {

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <InputComponent onChange={this.todoAdded} />

          <SortingComponent changeSort={this.changeSort} />
          
        
          <TodoListComponent
            todos={this.state.listArray}
            onDelete={this.deleteTodo}
            editDes={this.handleEditDes}

          />
          <DeletedListComponent
            onChange={this.reAdd}
            listArray={this.state.listArray}
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
