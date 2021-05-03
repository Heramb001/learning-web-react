import React, {useState} from 'react';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';

import CustomForm from './CustomFormComponent';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function InputForm(){

    const classes = useStyles();
    // const [title, settitle] = useState('');
    // const [fieldType, setfieldType] = useState('TextField')
    // const [formDetails, setformDetails]
    const [formDetails, setformDetails] = useState({'title': '', 'fields':[
        {'question': '', 'field': 'TextField', 'option': []},
    ]});

    const formTitle = formDetails.title;
    const inputFields = formDetails.fields;
    
    const handleChangeTitle = (e) => {
        setformDetails({'title': e.target.value, 'fields': inputFields});
    }
    const handleChangeField = (index, e) => {
        const values = [...inputFields];
        values[index][e.target.name] = e.target.value;
        setformDetails({'title': formTitle, 'fields': values});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Details : ", formDetails);
    }

    const updateFormDetails = (index, vals, formTitle) => {
        const values = [...inputFields];
        values[index]['option'] = vals;
        setformDetails({'title': formTitle, 'fields': values});
    }

    const handleAddFields = () => {
        // console.log('adding node');
        setformDetails({'title': formTitle, 'fields':[...inputFields, {'question': '', 'field': 'TextField', 'option': []}]});
    }

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index,1);
        setformDetails({'title': formTitle, 'fields': values});

    }

    return (
        <div className="CustomForm">
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth className={classes.root}>
                    <InputLabel htmlFor="">Form Title</InputLabel>
                    <Input
                        className={classes.root}
                        name="title"
                        label="Form Title"
                        value={formDetails.title}
                        onChange={handleChangeTitle}
                    />
                </FormControl>
                { inputFields.map((inputField, index) => (
                    <Box className={classes.root} boxShadow={0} key={index}>
                        <Card variant="outlined" className={classes.root}>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <FormControl fullWidth className={classes.root} variant="outlined">
                                        <InputLabel htmlFor="">Question</InputLabel>
                                        <OutlinedInput
                                            name="question"
                                            label="Question"
                                            value={inputField.question}
                                            onChange={e => handleChangeField(index, e)}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControl variant="outlined" className={classes.root} style={{minWidth: 180}}>
                                        <InputLabel>Field Type</InputLabel>
                                        <Select
                                                name="field"
                                                onChange = {e => handleChangeField(index, e)}
                                                defaultValue="TextField"
                                                label="Field Type">
                                            <MenuItem value="TextField">Text Field</MenuItem>
                                            <MenuItem value="CheckBox">Checkboxes</MenuItem>
                                            <MenuItem value="RadioButton">Radio Button</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={11}>
                                    <CustomForm
                                        index = {index} 
                                        fieldType = {inputField.field} 
                                        formTitle = {formDetails.title}
                                        onChange={updateFormDetails}
                                        className={classes.root} />
                                </Grid>
                            </Grid>
                        </Card>
                        <IconButton
                        onClick = {() => handleRemoveFields(index)}>
                            <RemoveIcon/>
                        </IconButton>
                        <IconButton
                        onClick = {() => handleAddFields()}>
                            <AddIcon/>
                        </IconButton>
                    </Box>
                ))}
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >Create Form</Button>               
            </form>
        </div>
    );
}

export default InputForm;