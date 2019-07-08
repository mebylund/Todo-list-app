import React from 'react';
import { TodoItem } from '../../Types/todo-item';
import { FormControlLabel, Switch, Button } from '@material-ui/core';

interface EditDescProps {
    todo: TodoItem;
}
interface EditDescState {
    onOff: boolean;
}

export class TodoEditDescriptionComponent extends React.Component<EditDescProps, EditDescState>{
    constructor(props: EditDescProps) {
        super(props);

        this.state = {
            onOff: false
        };
    }

    handleChange = () => {
        if (this.state.onOff == true) {
            this.setState({
                onOff: false
            });
        }
        if (this.state.onOff == false) {
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
                            color="primary"
                        />
                    }
                    label="Edit Description"
                />
            </div>
        )
    }
}
