import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login({ setToken }) {
  const history = useHistory();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const onChange = (input) => {
    setForm({
      ...form,
      [input.target.name]: input.target.value,
    });
  };

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/token/login/", {
        password: form.password,
        email: form.email,
      })
      .then((response) => {
        setToken(response.data.auth_token);
        localStorage.setItem("token", response.data.auth_token);
        history.push("/chat/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              onChange={onChange}
              className="form-control"
            />
            <div id="emailHelp" className="form-text">
              Este correo eletrónico no será compartido con nadie.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              onChange={onChange}
              className="form-control"
            />
          </div>
          <button type="button" onClick={onLogin} className="btn btn-primary">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
