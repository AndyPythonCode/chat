import React from "react";
import TextField from "@material-ui/core/TextField";

function MyInput({ onChange, inputs }) {
  return (
    <>
      {inputs.map((input, key) => {
        return (
          <TextField key={key}
            variant="outlined"
            margin="normal"
            fullWidth
            label={input.label}
            name={input.name}
            onChange={onChange}
            autoFocus={input.focus}
            required={input.required}
          />
        );
      })}
    </>
  );
}

export default MyInput;
