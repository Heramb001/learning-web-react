import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import DynamicCheckBoxGroup from './formFields/CheckGroupComponent';
import DynamicRadioGroup from './formFields/RadioGroupComponent';

function CustomForm(props){
    //console.log(props);
    const fieldType = props.fieldType;
    switch(fieldType){
        case 'TextField':
            return (
                <FormControl fullWidth className={props.className} variant="outlined">
                    <InputLabel htmlFor="">Answer</InputLabel>
                    <OutlinedInput
                        name="option"
                        label="options"
                        value=''
                    />
                </FormControl>
            );
        case 'CheckBox':
            return (
                <DynamicCheckBoxGroup onChange={props.onChange} index={props.index} formTitle={props.formTitle}/>
            );
        case 'RadioButton':
            return (
                <DynamicRadioGroup onChange={props.onChange} index={props.index} formTitle={props.formTitle}/>
            );
        default:
            return (
                <FormControl fullWidth className={props.className} variant="outlined">
                    <InputLabel htmlFor="">Answer</InputLabel>
                    <OutlinedInput
                        name="option"
                        label="options"
                        value=''
                    />
                </FormControl>
            );

    }
}

export default CustomForm;