import React from 'react';
import { TodoItem } from '../../Types/todo-item';
import { FormControlLabel, Switch, TextField } from '@material-ui/core';
import { v1 } from 'uuid';
import { EditPriorityComponent } from '../Edit Priority Component';


interface EditDescProps {
    editDes: (todos: TodoItem) => void;
    todo: TodoItem;
}
interface EditDescState {
    onOff: boolean;
    todoDescription: string;
    todoTitle: string;
    todoActive: boolean;
    dateCreated: Date;
    editPriority: number;
}

export class TodoEditDescriptionComponent extends React.Component<EditDescProps, EditDescState>{
    constructor(props: EditDescProps) {
        super(props);

        this.state = {
            onOff: false,
            todoDescription: this.props.todo['description'],
            todoTitle: this.props.todo['title'],
            todoActive: this.props.todo['isActive'],
            dateCreated: new Date(),
            editPriority: this.props.todo['priority']

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
            id: v1(),
            isActive: this.state.todoActive,
            dateCreated: this.state.dateCreated,
            priority: this.state.editPriority

        };
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

    editPri = (num: number) => {
        console.log(num);
        this.setState({
            editPriority: num
        }, () => {
            this.addTodoDes();
        }); 
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
                    label="Edit Description and Priority"
                />

                {this.state.onOff && (
                    <div>

                        <TextField
                            onKeyDown={this.handleKey}
                            id="standard-multiline-static"
                            label="Edit Description"
                            placeholder='Edit Description'
                            margin="normal"
                            onChange={(e) => this.onValueChangeDes(e)}
                            value={this.state.todoDescription}
                        />
                        {`Priority: ${this.state.editPriority}`}
                         <EditPriorityComponent editPri={this.editPri}/>
                    </div>
                )}


            </div>



        )
    }

}
