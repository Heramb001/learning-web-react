import React from "react";
import { Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Card from "@material-ui/core/Card";
import { FormControl } from "@material-ui/core";

function FormInput(props) {
    const { question, name, label, classes, control } = props;
    return (
        <Card variant="outlined" className={classes.root} style={{padding: "1%"}}>
            <Controller
                render={({ field: { onChange, value } }) => (
                    <FormControl>
                        <InputLabel>{question}</InputLabel>
                        <Input
                            name={name}
                            style={{width:"95%"}}
                            onChange={onChange}
                        />
                    </FormControl>
                )}
                name={name}
                control={control}
                label={label}
            />
        </Card>
    );
  }
  
  export default FormInput;