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
import './Navbar.css'

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
        <div className="navDiv">
            <AppBar className="navB" style={{ backgroundColor: '#001529', height: 100, }} variant="elevation">
                <Toolbar style={{ display: 'flex', justifyContent: 'start' }}>

                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to="/">Home</Link>
                    </Typography>
                    <Typography variant="h6">
                        <Link onClick={onClick} className={classes.link} to="/create">Creator</Link>
                    </Typography>
                </Toolbar>
            </AppBar>

        </div >
    )
}

export default Navbarr;