const login = {
  inputs: [
    {
      label: "Correo Electrónico",
      name: "email",
      type: "text",
      helper:"Este correo no será compartido con nadie más.",
      focus: true,
      required: true,
    },
    {
      label: "Contraseña",
      name: "password",
      type: "password",
      focus: false,
      required: true,
    },
  ],
};

export default login;
