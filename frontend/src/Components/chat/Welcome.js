import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import content from "../../form/Welcome";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#0094C6",
    width: "5rem",
    height: "5rem",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: "#0094C6",
    color: "white",
    "&:hover": {
      backgroundColor: "#005E7C",
    },
  },
  user: {
    color: "Green",
  },
}));

export default function Chat({ user }) {
  const classes = useStyles();

  const [data, setData] = React.useState({
    room: "",
  });

  //Cada navegación hacia adelante o hacia atrás usa el objeto history para navegar a un nuevo componente en una nueva URL:
  const history = useHistory();

  const inputChange = (input) => {
    setData({
      ...data,
      [input.target.name]: input.target.value,
    });
  };

  const enterToRoom = () => {
    history.push(`/chat/${data.room}/`);
  };

  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Bienvenido: <span className={classes.user}>{user}</span>
        </Typography>
        <form className={classes.form} onSubmit={enterToRoom}>
          {content.inputs.map((input) => {
            return (
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label={input.label}
                name={input.name}
                onChange={inputChange}
                autoFocus={input.focus}
                required={input.required}
              />
            );
          })}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Entrar
          </Button>
        </form>
      </div>
    </Container>
  );
}
