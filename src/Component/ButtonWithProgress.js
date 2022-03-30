import { IconButton } from '@material-ui/core';
import { Button } from '@mui/material';
import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { height } from '@mui/system';
const ButtonWithProgress = (props) => {
    const { onClick, pendingApiCall, disabled, text } = props
    return (
        <div>


            <IconButton
                disabled={disabled}
                onClick={onClick}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color='inherit'

            >
                {pendingApiCall && <span className="spinner-border spinner-border-lg"></span>}
                {text}

                <LoginIcon style={{ backgroundColor: ' #304b74', borderRadius: 100, width: 50, height: 50, padding: 3 }} fontSize='large' color='info' ></LoginIcon>
            </IconButton>
            {/* <button disabled={disabled} className='btn btn-primary'
                onClick={onClick}>
                {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}
                {text}
            </button> */}
        </div>
    );
};

export default ButtonWithProgress;