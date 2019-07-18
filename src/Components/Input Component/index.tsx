import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { TodoItem } from '../../Types/todo-item';
import { v1 } from 'uuid';



interface InputComponentProps {
    onChange: (todo: TodoItem) => void;
}

interface InputComponentState {
    todoTitle: string;
    todoDescription: string;
    onOff: boolean;
    todoActive: boolean;
    dateCreated: Date;
}

export class InputComponent extends React.Component<InputComponentProps, InputComponentState> {
    constructor(props: InputComponentProps) {
        super(props);

        this.state = {
            todoTitle: '',
            todoDescription: '',
            onOff: false,
            todoActive: true,
            dateCreated: new Date()
        };
    }

    onValueChange = (e: any) => {
        this.setState({ todoTitle: e.target.value });
    };
    onValueChangeDes = (e: any) => {
        this.setState({ todoDescription: e.target.value });
    };

    addTodo = () => {
        const todo: TodoItem = {
            title: this.state.todoTitle,
            description: this.state.todoDescription,
            id: v1(),
            isActive: this.state.todoActive,
            dateCreated: this.state.dateCreated
        };

        this.props.onChange(todo);
        this.setState({
            todoTitle: '',
            todoDescription:'',
        });

    };

    handleKey = (e: any) => {

        if (e.key === "Enter") {
            this.addTodo();
            this.setState({
                todoTitle: '',
                todoDescription:''
            });
        }
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
                <TextField
                    onKeyDown={this.handleKey}
                    id="standard-name"
                    label="Add Todo"
                    placeholder="Add Todo"
                    onChange={(e) => this.onValueChange(e)}
                    margin="normal"
                    value={this.state.todoTitle}
                />

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
                    label="Add Description"
                />

                <Button onClick={() => this.addTodo()} variant="contained" color="primary" >
                    Add
                </Button>


                {this.state.onOff && (
                    <div>
                        <TextField
                            onKeyDown={this.handleKey}
                            id="standard-multiline-static"
                            rows="4"
                            label="Add Description"
                            placeholder="Add Description"
                            margin="normal"
                            onChange={(e) => this.onValueChangeDes(e)}
                            value={this.state.todoDescription}

                        />
                    </div>
                )}


            </div>
        );
    }
}
