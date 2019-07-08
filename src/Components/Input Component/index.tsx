import React from 'react';

interface InputComponentProps {
    onChange: (todo: string) => void;
}

interface InputComponentState {
    todoValue: string;
}

export class InputComponent extends React.Component<InputComponentProps, InputComponentState> {
    constructor(props: InputComponentProps) {
        super(props);

        this.state = {
            todoValue: ''
        };
    }

    onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ todoValue: e.target.value });
    };

    addTodo = () => {
        this.props.onChange(this.state.todoValue);
    };

    handleKey = (e: any) => {
        
        if(e.key == "Enter"){
            this.addTodo();
            this.setState({
                todoValue:''
            });
        }
    }

    public render() {
        return (
            <div onKeyDown={this.handleKey}>
                <input
                    onChange={(e) => this.onValueChange(e)}
                    placeholder="Add Todo"
                    value={this.state.todoValue} />
                <button onClick={() => this.addTodo()}>Add</button>
            </div>
        );
    }
}
