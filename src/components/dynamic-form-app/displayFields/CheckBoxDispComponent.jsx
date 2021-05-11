import React, { useState } from "react";
import { Controller } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Card from "@material-ui/core/Card";
import { FormControl, FormGroup, FormLabel } from "@material-ui/core";

// to make it controlled state in control checked={value}

// const MuiCheckbox = (props) => {
//   const { label, options, onChange, register } = props;

//   return (
//     <FormControl>
//       <FormLabel>{label}</FormLabel>
//       <FormGroup>
//         {options.map((option, index)=>(
//           <FormControlLabel
//             control={<Checkbox onChange={onChange} name={option}/>}
//             // control={<Checkbox onChange={onChange} {...register({option})} name={option}/>}
//             // control={<Checkbox checked={checkedValues.includes(option)} onChange={() => onChange(handleSelect(option))} name={option} />}
//             // control={<Checkbox  onChange={(e) => (e.target.name)} name={option} />}
//             label={option}
//             key={index}
//             name={option}
//           />
//         ))}
//       </FormGroup>
//     </FormControl>
//   );
// };


// function FormCheckBox(props) {
//     const { question, name, options, classes, control, register } = props;
//     return (
//       <Card variant="outlined" className={classes.root}>
//         <Controller
//           name={name}
//           control={control}
//           render={({ field: { onChange, value } }) => (
//               <MuiCheckbox
//                 label={question}
//                 options={options}
//                 onChange={onChange}
//                 register={register}
//               />
//           )}
//         />
//       </Card>
//     );
//   }

function FormCheckBox(props) {
  const { question, name, options, classes, control, setValue } = props;

  const [checkedValues, setCheckedValues] = useState([]);
  

  function handleSelect(checkedName) {
    console.log("Old Values",checkedValues);
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