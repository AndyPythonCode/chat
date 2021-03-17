import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRouter from "../authentication/ProtectedRouter";
import Nav from "../dashboard/Nav";
import NotFound from "../dashboard/NotFound";
import Room from "../chat/Room";
import Chat from "../chat/Welcome";
import Login from "../authentication/login";
import Logout from "../authentication/Logout";
import Register from "../authentication/Register"

export default function Main() {
  const [token, setToken] = React.useState();
  const [auth, setAuth] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setAuth(true);
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <ProtectedRouter
          exact
          isAuth={auth}
          where={"/login"}
          path="/chat/:room_name"
          component={() => <Room token={token} />}
        />
        <ProtectedRouter
          exact
          isAuth={auth}
          where={"/login/"}
          path="/chat"
          component={() => <Chat token={token} />}
        />
        <ProtectedRouter
          exact
          isAuth={!auth}
          where={"/chat/"}
          path="/login"
          component={() => <Login setToken={setToken} />}
        />
        <ProtectedRouter
          exact
          isAuth={auth}
          where={"/chat/"}
          path="/logout"
          component={() => <Logout setAuth={setAuth} token={token} />}
        />
        <ProtectedRouter
          exact
          isAuth={!auth}
          where={"/chat/"}
          path="/"
          component={() => <Register/>}
        />
        <Route component={() => <NotFound />} />
      </Switch>
    </BrowserRouter>
  );
}
