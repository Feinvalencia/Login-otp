import React, { useState } from "react";
import styled from "styled-components";
import { BoxEstado } from "./BoxEstado";
import { Tramite } from "./Tramite";

const BoxHead = styled.div`
  display: flex;
`;

const Search = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 20px 6px;
  background: #00133c;
  color: white;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #fff;
  }
`;
const Container = styled.div`
  display: flex;
`;

const BoxMenu = styled.div`
  width: 30%;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #002e8d4a;
  border: 1px solid rgb(114 114 114 / 28%);
  box-shadow: 1px 2px 5px rgb(177 159 159 / 41%);
  backdrop-filter: blur(12px);
  padding: 3rem;
  -webkit-backdrop-filter: blur(12px);
`;
const BoxMini = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
`;
const BoxTramite = styled.div`
  margin-top: 1rem;
  box-shadow: 1px 2px 5px rgb(255 255 255 / 30%);
  padding: 2rem;
  border-radius: 10px;
  background-color: #002e8d4a;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  cursor: pointer;
`;

const BoxDash = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Dash = styled.div`
  display: flex;
  border-radius: 10px;
  width: 90%;
  height: 90%;
  box-shadow: 1px 2px 5px rgb(255 255 255 / 30%);
  background-color: #ffffff17;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 3rem;
`;
// const BoxEstado = styled.div`
//   border-right: 1px solid #ccc;
//   width: 50%;
//   padding: 2rem;
// `;
// const BoxEstado2 = styled.div`
//   border-left: 1px solid #ccc;
//   width: 50%;
//   padding: 2rem;
// `;

const Dashboard = ({ usuario, tramites }) => {
  const [tramiteSeleccionado, setTramiteSeleccionado] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [tramitesFiltrados, setTramitesFiltrados] = useState([]);
  const [estadosIzquierda, setEstadosIzquierda] = useState([]);
  const [estadosDerecha, setEstadosDerecha] = useState([]);

  const handleClick = (id) => {
    const tramite = tramites.find((x) => x.id === id);
    setTramiteSeleccionado(id);

    // Izq
    const estadosI = tramite.estados.filter(
      (estado, index) => index % 2 === 0 && estado
    );

    // Der
    const estadosR = tramite.estados.filter(
      (estado, index) => index % 2 !== 0 && estado
    );
    setEstadosIzquierda(estadosI);
    setEstadosDerecha(estadosR);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    const filtrados = tramites.filter((estado) =>
      estado.descripcion.toLowerCase().includes(value.toLocaleLowerCase())
    );

    setTramitesFiltrados(filtrados);
  };
  return (
    <Container>
      <BoxMenu>
        <Menu>
          <BoxHead>
            <BoxMini>
              <img src={usuario.img} alt={usuario.nombre} />
            </BoxMini>
            <Search
              placeholder="Buscar Tramite"
              onChange={handleSearch}
              value={searchValue}
            />
          </BoxHead>
          <BoxTramite>
            {searchValue === ""
              ? tramites.map((tramite) => (
                  <Tramite
                    key={tramite.id}
                    tramite={tramite}
                    handleClick={handleClick}
                    tramiteSeleccionado={tramiteSeleccionado}
                  />
                ))
              : tramitesFiltrados.map((tramite) => (
                  <Tramite
                    key={tramite.id}
                    tramite={tramite}
                    handleClick={handleClick}
                    tramiteSeleccionado={tramiteSeleccionado}
                  />
                ))}
          </BoxTramite>
        </Menu>
      </BoxMenu>
      <BoxDash>
        <Dash>
          <BoxEstado
            align="izquierda"
            estados={estadosIzquierda}
            tramiteSeleccionado={tramiteSeleccionado}
          />
          <BoxEstado
            align="derecha"
            estados={estadosDerecha}
            tramiteSeleccionado={tramiteSeleccionado}
          />
        </Dash>
      </BoxDash>
    </Container>
  );
};

export default Dashboard;
