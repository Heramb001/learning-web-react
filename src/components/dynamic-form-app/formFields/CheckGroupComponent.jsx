import { useState } from "react";

import {FormGroup, Checkbox, Button, IconButton, TextField, Box} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function DynamicCheckBoxGroup(props){
    const [ boxDetails, setboxDetails ] = useState(['']);

    const handleAddFields = () => {
        // console.log('adding node');
        setboxDetails([...boxDetails, '']);
        props.onChange(props.index, [...boxDetails], props.formTitle);
    }

    const handleRemoveFields = (index) => {
        const values = [...boxDetails];
        values.splice(index,1);
        setboxDetails(values);
        props.onChange(props.index, values, props.formTitle);
    }

    const handleChange = (index, e) => {
        const values = [...boxDetails];
        values[index] = e.target.value 
        // console.log(values);
        setboxDetails(values);
        props.onChange(props.index, values, props.formTitle);    
    }

    return(
        <div>
            <FormGroup>
                { boxDetails.map((inputBox, index) => (
                    <Box display="flex" flexDirection="row" key={index}>
                        <Checkbox checked={false} />
                        <TextField placeholder= {'Option '+Number(index+1)} onChange={e => handleChange(index, e)}/>
                        <IconButton
                            onClick = {() => handleRemoveFields(index)}>
                            <DeleteIcon/>
                        </IconButton>
                    </Box>
                ))}
            </FormGroup>
            <Box display="flex" flexDirection="row">
            <Button
                onClick = {() => handleAddFields()}>
                Add Option
            </Button>
            </Box>
        </div>       
    );

}

export default DynamicCheckBoxGroup;