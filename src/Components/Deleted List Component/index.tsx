import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { v1 } from 'uuid';
import { TodoItem } from '../../Types/todo-item';

interface DeletedListComponentProps {
    onChange: (todo: TodoItem) => void;
    listArray: TodoItem[];
}

interface DeletedListComponentState {
    todoTitle: string;
    todoDescription: string;
    onOff: boolean;
    todoActive: boolean;
    dateCreated: Date;

}

export class DeletedListComponent extends React.Component<DeletedListComponentProps, DeletedListComponentState> {
    constructor(props: DeletedListComponentProps) {
        super(props);

        this.state = {
            todoTitle: '',
            todoDescription: '',
            onOff: false,
            todoActive: true,
            dateCreated: new Date()
        };
    }

    addTodo = (todo:TodoItem) => {

        this.props.onChange(todo);

    };

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
                {/* switch button */}
                <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.onOff}
                            onChange={(e) => this.handleChange()}
                            value="checkedB"
                            color="secondary"
                        />
                    }
                    label="Completed List"
                />

                {this.state.onOff && (
                    <div>
                        {this.props.listArray.filter(item => !item.isActive)
                        .map(todo =>
                            <li key={todo.id}>
                                {todo.title}
                                <Button onClick={() => this.addTodo(todo)} variant="contained" color="secondary" >
                                    Add Back
                                </Button>

                            </li>
                        )}

                    </div>
                )}

            </div>

        )
    }
}
