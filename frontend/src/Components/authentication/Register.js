import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

function Register() {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();

  const newUser = (form) => {
    axios
      .post("http://localhost:8000/api/v1/users/", {
        username: form.username,
        first_name: form.firstname,
        last_name: form.lastname,
        email: form.email,
        password: form.password,
      })
      .then(() => {
        history.push("/login/");
      })
      .catch((error) => {
        const response = error.response.data;
        document.getElementById("server").innerText = "";
        for (const element in response) {
          document.getElementById(
            "server"
          ).innerText += `${element}: Ya existe un usuario con esos datos.\n`;
        }
      });
  };

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <h3 className="mt-4 text-primary display-5 text-center">
          Nuevo usuario
        </h3>
        <form onSubmit={handleSubmit(newUser)}>
          <input
            type="text"
            name="username"
            placeholder="Apodo"
            className="mt-2 form-control"
            ref={register({
              required: {
                value: true,
                message: "El apodo es requerido!",
              },
            })}
          />
          <p className="text-danger text-small d-block mb-2">
            {errors.username?.message}
          </p>
          <input
            type="text"
            name="firstname"
            placeholder="Nombres"
            className="mt-2 form-control"
            ref={register({
              required: {
                value: true,
                message: "El primer nombre es requerido!!",
              },
            })}
          />
          <p className="text-danger text-small d-block mb-2">
            {errors.firstname?.message}
          </p>
          <input
            type="text"
            name="lastname"
            placeholder="Apellidos"
            className="mt-2 form-control"
            ref={register({
              required: {
                value: true,
                message: "El apellido es requerido!",
              },
            })}
          />
          <p className="text-danger text-small d-block mb-2">
            {errors.lastname?.message}
          </p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mt-2 form-control"
            ref={register({
              required: {
                value: true,
                message: "El email es requerido!",
              },
            })}
          />
          <p className="text-danger text-small d-block mb-2">
            {errors.email?.message}
          </p>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="mt-2 form-control"
            ref={register({
              required: {
                value: true,
                message: "Necesitas una contraseña!",
              },
              minLength: {
                value: 8,
                message: "Minimo de caracteres 8!",
              },
            })}
          />
          <p className="text-danger text-small d-block mb-2">
            {errors.password?.message}
          </p>
          <p id="server"></p>
          <div className="mt-3 d-grid gap-2 col-6 mx-auto">
            <input
              className="btn btn-primary"
              value="Registrar"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
