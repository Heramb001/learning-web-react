import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    list: {
      width: 250,
      backgroundColor: theme.palette.background.paper,
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
            <Link to="/"><ListItem button><ListItemText primary="Home"/></ListItem></Link>
            <Divider />
            <Link to="/dynamic-form"><ListItem button><ListItemText primary="Dynamic Form"/></ListItem></Link>
            <ListItem button onClick={handleClick}> 
                <ListItemText primary="BPM Editors" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to="/editors/dmn"><ListItem button className={classes.nested}><ListItemText primary="DMN Editor"/></ListItem></Link>
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
          <Drawer open={state} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
    );

}

export default NavbarComponent;