import { useState } from "react";

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';


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