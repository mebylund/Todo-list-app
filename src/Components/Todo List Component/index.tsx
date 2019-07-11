import React from 'react';
import Button from '@material-ui/core/Button';
import { TodoItem } from '../../Types/todo-item';
import { FormControlLabel, Switch, TextField } from '@material-ui/core';
import { TodoItemComponent } from '../Todo Item Component';


interface TodoListProps {
    todos: TodoItem[];
    onDelete: (todos: TodoItem) => void;
    editDes: (todos: TodoItem) => void;

}

interface TodoListState {
    onOff: boolean;
}

export class TodoListComponent extends React.Component<TodoListProps, TodoListState> {
    constructor(props: TodoListProps) {
        super(props);

        this.state = {
            onOff: false
        };
    }



    public render() {
        return (
            <div>
                <ul>
                    {this.props.todos.filter(item => item.isActive)
                        .map(todo => (
                            <li key={todo.id}>
                                <TodoItemComponent
                                    todo={todo}
                                    onDelete={this.props.onDelete}
                                    editDes={this.props.editDes}
                                />

                            </li>
                        ))}
                </ul>
            </div>
        )
    }
}