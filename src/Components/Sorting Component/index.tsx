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

    function handleClose(type: string) {
        setAnchorEl(null);
        if (type === 'revalpha') {
            props.changeSort('revalpha');
        }
        if (type === 'alphabetically'){
            props.changeSort('alphabetically');
        }
        if(type === 'datecreated'){
            props.changeSort('datecreated');
        }
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
                <MenuItem onClick={(e) => handleClose('alphabetically')}>Alphabetically</MenuItem>
                <MenuItem onClick={(e) => handleClose('revalpha')}>Reverse Alphabetically</MenuItem>
                <MenuItem onClick={(e) => handleClose('datecreated')}>Date Created</MenuItem>
            </Menu>
        </div>
    )
}

