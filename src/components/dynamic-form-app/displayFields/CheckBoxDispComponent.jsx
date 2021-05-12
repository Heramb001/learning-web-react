import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { FormControl, FormControlLabel, FormGroup, Checkbox, Card, FormLabel } from "@material-ui/core";

function FormCheckBox(props) {
  const { question, name, options, classes, control, setValue } = props;

  const [checkedValues, setCheckedValues] = useState([]);
  

  function handleSelect(checkedName) {
    const newNames = checkedValues?.includes(checkedName)
      ? checkedValues?.filter(name => name !== checkedName)
      : [...(checkedValues ?? []), checkedName];
    setCheckedValues(newNames);
    setValue(name, newNames);
    return newNames;
  }

  return (
    <Card variant="outlined" className={classes.root}>
      <FormControl>
        <FormLabel>{question}</FormLabel>
        <FormGroup>
          {options.map((option, index)=>(
            <FormControlLabel
              key={index}
              label={option}
              control={
                <Controller
                  name={name}
                  control={control}
                  render={({onChange}) => {
                    return (
                      <Checkbox 
                        // checked={!checkedValues.includes(option)}
                        onChange={()=>{handleSelect(option)}}
                      />
                    );
                  }}
                  />
              }
            />
          ))}
        </FormGroup>
      </FormControl>
      {/* //  <Controller
      //   name={name}
      //   control={control}
      //   render={({ field: { onChange, value } }) => (
      //       <MuiCheckbox
      //         label={question}
      //         options={options}
      //         onChange={onChange}
      //         register={register}
      //       />
      //   )}
      // /> */}
    </Card>
  );
}

  
export default FormCheckBox;