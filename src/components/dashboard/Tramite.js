import React from "react";
import styled from "styled-components";

export const Tramite = ({ tramite, tramiteSeleccionado, handleClick }) => {
  const CajaTramite = styled.div`
    border: 1px solid #fff;
    border-radius: 10px;
    margin-bottom: 1rem;
    transition: 0.4s;
    background-color: ${tramiteSeleccionado === tramite.id
      ? "#1591c3"
      : "rgba(0,0,0,0)"};

    h3 {
      text-align: center;
      font-size: 1.5rem;
      color: white;
    }
    &:hover {
      color: white;
      border: 2px solid #fff;
      background-color: #1591c3;
    }
    &:active {
      background-color: #000;
    }
  `;
  return (
    <CajaTramite onClick={() => handleClick(tramite.id)}>
      <h3>{tramite.descripcion}</h3>
    </CajaTramite>
  );
};
