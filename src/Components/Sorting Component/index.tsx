import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { TodoItem } from '../../Types/todo-item';

interface SortingComponentProps {
    changeSort: (sortType: string) => void;
}

export function SortingComponent(props: SortingComponentProps) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event: any) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);  
        props.changeSort('alphabetically');
    }

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Sort List
      </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Alphabetically</MenuItem>
                {/* <MenuItem onClick={handleClose}>Reverse Alphabetically</MenuItem> */}
                {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
        </div>
    )
}

