import React from "react";
import Room from "./Components/chat/Room";
import Chat from "./Components/chat/Welcome";
import Login from "./Components/authentication/login";
import context from "./django_context/get_context_data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* Chat Room */}
        <Route
          path="/chat/:room_name"
          exact
          component={() => <Room user={context.request.user} />}
        />
        <Route
          path="/chat"
          exact
          component={() => <Chat user={context.request.user} />}
        />

        {/* Authentication */}
        <Route 
          path="/usuario/login"
          exact
          component={() => <Login />}
        />

        {/* Home */}
        <Route 
          exact 
          path="/">
          <p>Hola Mundo a todos!!!!</p>
        </Route>

        {/* 404 Error */}
        <Route>
          <p>No se encontro nada en esta pagina</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
