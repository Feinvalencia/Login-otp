import Dashboard from "./components/dashboard/Dashboard";
import LoginOtp from "./components/login-otp/LoginOtp";
import Login from "./components/login/Login";
import React, { useState } from "react";
function App() {
  const [logged, setLogged] = useState(false);

  const data = {
    inicioSesion: {
      email: "feinvalencia@gmail.com",
      otp: "12345",
    },
    usuario: {
      nombre: "feiner",
      img: "https://us.123rf.com/450wm/alekseyvanin/alekseyvanin1704/alekseyvanin170403663/76699411-vector-de-icono-de-usuario-ilustraci%C3%B3n-de-logotipo-s%C3%B3lido-de-perfil-pictograma-aislado-en-blanco.jpg",
    },
    tramites: [
      {
        id: 1,
        descripcion: "Tramite 1",
        estados: [
          {
            id: 1,
            descripcion: "Estado 1",
          },
          {
            id: 2,
            descripcion: "Estado 2",
          },
          {
            id: 3,
            descripcion: "Estado 3",
          },
          {
            id: 4,
            descripcion: "Estado 4",
          },
        ],
      },
      {
        id: 2,
        descripcion: "Tramite 2",
        estados: [
          {
            id: 1,
            descripcion: "Estado 1",
          },
          {
            id: 2,
            descripcion: "Estado 2",
          },
          {
            id: 3,
            descripcion: "Estado 3",
          },
          {
            id: 4,
            descripcion: "Estado 4",
          },
        ],
      },
      {
        id: 3,
        descripcion: "Tramite 3",
        estados: [
          {
            id: 1,
            descripcion: "Estado 1",
          },
          {
            id: 2,
            descripcion: "Estado 2",
          },
          {
            id: 3,
            descripcion: "Estado 3",
          },
          {
            id: 4,
            descripcion: "Estado 4",
          },
        ],
      },
      {
        id: 4,
        descripcion: "Tramite 4",
        estados: [
          {
            id: 1,
            descripcion: "Estado 1",
          },
          {
            id: 2,
            descripcion: "Estado 2",
          },
          {
            id: 3,
            descripcion: "Estado 3",
          },
          {
            id: 4,
            descripcion: "Estado 4",
          },
        ],
      },
    ],
  };
  return (
    <>
      {logged ? (
        <Dashboard usuario={data.usuario} tramites={data.tramites} />
      ) : (
        <Login data={data} setLogged={setLogged} />
      )}
    </>
  );
}

export default App;
