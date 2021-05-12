import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar, Typography} from '@material-ui/core';
import NavbarComponent from './NavbarComponent';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

const HomeComponent = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <NavbarComponent classes={classes.menuButton}/>
                <Typography variant="h6" className={classes.title}>
                    Home
                </Typography>
                </Toolbar>
            </AppBar>
      </div>
    );

};

export default HomeComponent;