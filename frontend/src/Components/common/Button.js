import React from 'react-router-dom'
import Button from "@material-ui/core/Button";

function MyButton({classes, type}){
    return (
      <Button
        type={type}
        fullWidth
        variant="contained"
        className={classes}
      >
        Entrar
      </Button>
    );
}

export default MyButton;