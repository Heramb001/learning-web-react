import {Container, AppBar, Toolbar, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import InputForm from './InputForm';
import NavbarComponent from '../NavbarComponent';

const useStyles = makeStyles((theme) => ({
    // root: {
    //   flexGrow: 1,
    // },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

function DynamicFormMain(){
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <NavbarComponent classes={classes.menuButton}/>
                <Typography variant="h6" className={classes.title}>
                    Dynamic Form
                </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <InputForm/>
            </Container>
        </div>
    )
}

export default DynamicFormMain;