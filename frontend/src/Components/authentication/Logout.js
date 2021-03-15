import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
//Me queda a aca, redireccionar y borrar token
function LogOut({ setAuth, token }) {
  const history = useHistory();

  const onClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/token/logout/", {}, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        setAuth(false)
        localStorage.removeItem('token')
        history.push("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <p>LogOut Page</p>
      <button onClick={onClick}>Logout</button>
    </div>
  );
}

export default LogOut;
