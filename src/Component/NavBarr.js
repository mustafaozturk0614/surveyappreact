import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { color } from "@mui/system";
import { Menu, MenuItem } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        padding: 10,
        textAlign: "left",

    },

    link: {
        textDecoration: "none",
        boxShadow: "none",
        color: "white"
    }
}));


function Navbarr() {
    const classes = useStyles();
    let history = useNavigate();
    const { template, setTemplate } = useState()
    const onClick = () => {
        setTemplate({})
    }
    return (
        <div>
            <AppBar position="fixed" color="secondary" variant="elevation" style={{ height: 71 }}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon >
                            <Menu>
                                <MenuItem> a</MenuItem>
                                <MenuItem> v</MenuItem>
                                <MenuItem> v</MenuItem>


                            </Menu>
                        </MenuIcon>
                    </IconButton>
                    <Typography variant="h6" className={classes.title} style={{ textShadow: 'revert' }}>
                        <Link className={classes.link} to="/">Home</Link>
                    </Typography>
                    <Typography variant="h6">
                        <Link on onClick={onClick} className={classes.link} to="/create">Creator</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div >
    )
}

export default Navbarr;