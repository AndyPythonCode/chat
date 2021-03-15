import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import welcome from "../../form/Welcome";
import MyInput from "../common/Input";
import MyButton from "../common/Button";
import CurrentUser from "../common/CurrentUser";

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
    fontWeight: "bold",
  },
}));

export default function Chat({token}) {
  //Cada navegación hacia adelante o hacia atrás usa el objeto history para navegar a un nuevo componente en una nueva URL:
  const history = useHistory();
  const classes = useStyles();
  const [data, setData] = React.useState({
    room: "",
  });

  const inputChange = (input) => {
    setData({
      ...data,
      [input.target.name]: input.target.value,
    });
  };

  const enterToRoom = (e) => {
    history.push(`/chat/${data.room}/`);
    localStorage.setItem("room", data.room); //Persisten data
    e.preventDefault();
  };

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Bienvenido:{" "}
          <span className={classes.user}>{<CurrentUser token={token} />}</span>
        </Typography>

        <form className={classes.form} onSubmit={enterToRoom}>
          <MyInput inputs={welcome.inputs} onChange={inputChange} />
          <MyButton type="submit" classes={classes.submit} />
        </form>
      </div>
    </Container>
  );
}
