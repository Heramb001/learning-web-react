import { useState } from "react";

import {FormControlLabel, RadioGroup, Radio, Button, TextField, IconButton, Box} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


function DynamicRadioGroup(props){
    const [ radioDetails, setradioDetails ] = useState(['']);

    const handleAddFields = () => {
        // console.log('adding node');
        setradioDetails([...radioDetails, '']);
        props.onChange(props.index, [...radioDetails], props.formTitle);
    }

    const handleRemoveFields = (index) => {
        const values = [...radioDetails];
        values.splice(index,1);
        setradioDetails(values);
        props.onChange(props.index, values, props.formTitle);
    }

    const handleChange = (index, e) => {
        const values = [...radioDetails];
        values[index] = e.target.value 
        // console.log(values);
        setradioDetails(values);
        props.onChange(props.index, values, props.formTitle); 
    }

    return(
        <div>
            <RadioGroup>
            { radioDetails.map((inputBox, index) => (
                <Box display="flex" flexDirection="row" key={index}>
                    <FormControlLabel
                      control={<Radio checked={false}/>}
                    />
                    <TextField placeholder= {'Option '+Number(index+1)} onChange={e => handleChange(index, e)}/>
                    <IconButton
                        onClick = {() => handleRemoveFields(index)}>
                        <DeleteIcon/>
                    </IconButton>
                </Box>
            ))}
            </RadioGroup>
            <Box display="flex" flexDirection="row">
            <Button
                onClick = {() => handleAddFields()}>
                Add Option
            </Button>
            </Box>
        </div>       
    );

}

export default DynamicRadioGroup;