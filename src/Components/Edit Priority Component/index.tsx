import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';

interface EditPriorityProps {
    editPri: (priority: number) => void;
}

export function EditPriorityComponent(props: EditPriorityProps) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    function handleClick(event: any) {
        setAnchorEl(event.currentTarget);
    }


    function handleClose(num: number) {
        setAnchorEl(null);
        if (num === 1) {
            props.editPri(1);
        }
        if (num === 2) {
            props.editPri(2);
        }
        if (num === 3) {
            props.editPri(3);
        }
    }


return (
    <div>

        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Change Priority
          </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={(e) => handleClose(1)}>1</MenuItem>
            <MenuItem onClick={(e) => handleClose(2)}>2</MenuItem>
            <MenuItem onClick={(e) => handleClose(3)}>3</MenuItem>
        </Menu>
    </div>
);
}