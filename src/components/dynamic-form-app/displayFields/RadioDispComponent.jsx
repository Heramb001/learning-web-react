import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from "@material-ui/core";
import { Card } from "@material-ui/core";

const MuiRadioGroup = (props) => {
  const { label, options, onChange } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup onChange={onChange}>
        {options.map((option, index)=>(
          <FormControlLabel
            control={<Radio />}
            label={option}
            key={index}
            value={option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};


function FormRadio(props) {
    //const { control } = useFormContext();
    const { question, name, options, classes, control } = props;
    //const { name, label } = props;

    return (
      <Card variant="outlined" className={classes.root}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <MuiRadioGroup
              label={question}
              options={options}
              onChange={onChange}
            />
          )}
        />
      </Card>
    );
  }
  
  export default FormRadio;