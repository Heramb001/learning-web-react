import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Collapse, Drawer, List, Divider, ListItem, ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { indigo } from '@material-ui/core/colors';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    navLink:{ textDecoration: 'none' },
    paper:{
      color: "#fff",
      backgroundColor: indigo[400],
    },
    list: {
      width: 250,
      color: "#fff",
      backgroundColor: indigo[400],
      // '>&:link': {
      //   color: "#fff",
      // },
    },
    listItem:{
      color:"#fff",
      '&:hover': {
        backgroundColor: indigo[600],
      },
    },
    fullList: {
      width: 'auto',
    },
    nested: {
        paddingLeft: theme.spacing(4),
      },
}));

const NavbarComponent = (props) => {
    const classes = useStyles();
    const [state, setState] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState(open);
    };
    
    const list = () => (
        <div
          className={classes.list}
          role="presentation"
        //   onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <Link to="/" className={classes.navLink}><ListItem button className={classes.listItem}><ListItemText primary="Home"/></ListItem></Link>
            <Divider />
            <Link to="/dynamic-form" className={classes.navLink}><ListItem button className={classes.listItem}><ListItemText primary="Dynamic Form"/></ListItem></Link>
            <Divider />
            <Link to="/saved-form" className={classes.navLink}><ListItem button className={classes.listItem}><ListItemText primary="Saved Form"/></ListItem></Link>
            <Divider />
            <ListItem button onClick={handleClick} className={classes.listItem}> 
                <ListItemText primary="BPM Editors" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to="/editors/dmn" className={classes.navLink}><ListItem button className={classes.listItem}><ListItemText primary="DMN Editor" style={{paddingLeft: "10%"}}/></ListItem></Link>
                    {/* <Link to="/editors/bpmn"><ListItem button><ListItemText primary="BPMN Editor"/></ListItem></Link> */}
                </List>
            </Collapse>

            <Divider />
          </List>
        </div>
    )

    return (
        <React.Fragment>
          <IconButton edge="start" className={props.classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
          <Drawer open={state} onClose={toggleDrawer(false)} classes={{ paper: classes.paper }}>
            {list()}
          </Drawer>
        </React.Fragment>
    );

}

export default NavbarComponent;