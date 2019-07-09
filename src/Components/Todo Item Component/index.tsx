import React from 'react';
import { TodoItem } from '../../Types/todo-item';
import { FormControlLabel, Switch, Button } from '@material-ui/core';
import { TodoEditDescriptionComponent } from '../Todo Edit Description Component';

interface TodoItemProps {
    todo: TodoItem;
    onDelete: (todos: TodoItem) => void;
    editDes: (todos: TodoItem) => void;

}
interface TodoItemState {
    onOff: boolean;
}

export class TodoItemComponent extends React.Component<TodoItemProps, TodoItemState> {
    constructor(props: TodoItemProps) {
        super(props);

        this.state = {
            onOff: false
        };
    }

    handleChange = () => {
        if (this.state.onOff === true) {
            this.setState({
                onOff: false
            });
        }
        if (this.state.onOff === false) {
            this.setState({
                onOff: true
            });
        }
    }

    public render() {
        return (
            <div>
                {this.props.todo.title}

                {/* switch button */}
                <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.onOff}
                            onChange={(e) => this.handleChange()}
                            value="checkedB"
                            color="primary"
                        />
                    }
                    label="Toggle Description"
                />
                <Button onClick={() => this.props.onDelete(this.props.todo)} size='small' variant="outlined" color="primary" >
                    X
                </Button>

                {this.state.onOff && (
                    <div>
                        {this.props.todo.description}
                        <TodoEditDescriptionComponent 
                            todo={this.props.todo}
                            editDes={this.props.editDes}
                        />
                    </div>
                )}
            </div>
        )
    }

}