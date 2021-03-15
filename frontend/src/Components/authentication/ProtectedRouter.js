import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRouter({
  isAuth, //Login
  where, //redirect to
  component: Display, //every component
  ...rest //it's like *args in python
}) {
  return (
    <Route
      {...rest}
      render={() => {
        if(isAuth){
            return <Display />
        }else {
            return <Redirect to={where}/>
        }
      }}
    />
  );
}
