import React from 'react';

interface TodoListProps {
    todos: string[];
    onDelete: (todos: string) => void;
}

export class TodoListComponent extends React.Component<TodoListProps> {
    public render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        <li key={todo}>
                            {todo} <button onClick={() => this.props.onDelete(todo)}>x</button>
                        </li>
                    ))}
                </ul>
            </div>    
        )
    }   
}