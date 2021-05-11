import { useForm } from "react-hook-form";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import FormInput from "./displayFields/TextFieldDispComponent";
import FormCheckbox from "./displayFields/CheckBoxDispComponent";
import FormRadio from "./displayFields/RadioDispComponent";

import NavbarComponent from '../NavbarComponent';
import savedForms from "./savedSamples";

const FormField = (props) => {
    const {index, fieldType, question, options, classes, control, setValue} = props;
    switch(fieldType){
        case "TextField":
            return(
                <FormInput question={question} name={"q"+index} label={"q"+index} classes={classes} control={control}/>
            );
        case "CheckBox":
            return (
                <FormCheckbox question={question} name={"q"+index} options={options} classes={classes} control={control} setValue={setValue}/>
            );
        case "RadioButton":
            return (
                <FormRadio question={question} name={"q"+index} options={options} classes={classes} control={control}/>
            );
        default:
            return (
                <FormInput question={question} name={"q"+index} label={"q"+index} classes={classes} control={control}/>  
            );
    }
};


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    display: {
        '& > *': {
          margin: theme.spacing(2),
        },
      },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
  }));

function SavedFormComponent(){
    const formNo=5;
    const classes= useStyles();
    const { control, handleSubmit, setValue } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <NavbarComponent classes={classes.menuButton}/>
                <Typography variant="h6" className={classes.title}>
                    Saved Forms
                </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} className={classes.display}>
                                <Typography variant="h6" className={classes.title}>
                                    {savedForms[formNo].title}
                                </Typography>
                            </Grid>
                            <Divider/>
                            {savedForms[formNo].fields.map((field, index)=>(
                                <Grid key={index} item xs={11}>
                                    <FormField 
                                        index={index}
                                        fieldType={field.field} 
                                        question={field.question} 
                                        options={field.option}
                                        classes={classes}
                                        control={control}
                                        setValue={setValue}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                </form>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                >SUBMIT
                </Button>
            </Container>
        </div>
    );
}

export default SavedFormComponent;
