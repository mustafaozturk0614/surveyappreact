import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@material-ui/core';
const drawerWidth = 240;
const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    },
    paper: {
        background: "red"
    }
});
export default function Side() {

    const classes = useStyles();

    return (
        <div >





            <Drawer
                classes={{ paper: classes.paper }}

                variant="permanent"



                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },


                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}
                >
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div >
    );
}