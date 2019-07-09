import React from 'react';
import { TodoItem } from '../../Types/todo-item';
import { FormControlLabel, Switch, TextField } from '@material-ui/core';
import { v1 } from 'uuid';
import { conditionalExpression } from '@babel/types';


interface EditDescProps {
    editDes: (todos: TodoItem) => void;
    todo: TodoItem;
}
interface EditDescState {
    onOff: boolean;
    todoDescription: string;
    todoTitle: string;
}

export class TodoEditDescriptionComponent extends React.Component<EditDescProps, EditDescState>{
    constructor(props: EditDescProps) {
        super(props);

        this.state = {
            onOff: false,
            todoDescription: this.props.todo['description'],
            todoTitle: this.props.todo['title']
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

    addTodoDes = () => {
        const todo: TodoItem = {
            title: this.state.todoTitle,
            description: this.state.todoDescription,
            id: v1()
        };
        console.log(todo);
        this.props.editDes(todo);

    };

    onValueChangeDes = (e: any) => {
        this.setState({ todoDescription: e.target.value });
    };

    handleKey = (e: any) => {

        if (e.key === "Enter") {
            this.addTodoDes();
            this.setState({
                todoDescription: ''
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
                            color="primary"
                        />
                    }
                    label="Edit Description"
                />

                {this.state.onOff && (
                    <div>
                        
                        <TextField
                            onKeyDown={this.handleKey}
                            id="standard-multiline-static"
                            rows="4"
                            label="Edit Description"
                            placeholder='Edit Description'
                            margin="normal"
                            onChange={(e) => this.onValueChangeDes(e)}
                            value={this.state.todoDescription}
                        />
                    </div>
                )}


            </div>



        )
    }

}
