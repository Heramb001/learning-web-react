import React, {useState} from 'react';

import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import {Button, IconButton, Card, MenuItem, Select, Grid, Box} from '@material-ui/core';
import {FormControl, Input, InputLabel, OutlinedInput} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {amber} from '@material-ui/core/colors';

import CustomForm from './CustomFormComponent';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    group: {
        marginLeft: "45%",
    },

    btnPreview: {
        color: theme.palette.getContrastText(amber[500]),
        backgroundColor: amber[500],
        '&:hover': {
          backgroundColor: amber[700],
        },
      },
  }));

function InputForm({ match }){
    const classes = useStyles();
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
        // Call backend, Store the form and return a notification saying form saved or error saving form.
        console.log("Form Details : ", formDetails);
    }

    const handlePreview = (e) => {
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
                        <div className={classes.group}>
                            <IconButton
                            onClick = {() => handleRemoveFields(index)}>
                                <RemoveIcon/>
                            </IconButton>
                            <IconButton
                            onClick = {() => handleAddFields()}>
                                <AddIcon/>
                            </IconButton>
                        </div>
                    </Box>
                ))}
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                    >Create Form</Button> 
                    &nbsp;&nbsp;
                    {/* <Link to={`${url}/preview`}> Preview Button */}
                        <Button
                            variant="contained"
                            className={classes.btnPreview}
                            onClick={(e) => handlePreview(e)}
                        >Preview Form</Button>
                    {/* </Link> */}
                </div>               
            </form>
        </div>
    );
}

export default InputForm;