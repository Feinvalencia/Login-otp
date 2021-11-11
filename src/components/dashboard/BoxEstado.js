import React from "react";
import styled from "styled-components";

const BoxIzquierda = styled.div`
  border-right: 1px solid #ccc;
  width: 50%;
  padding: 2rem;
`;
const BoxDerecha = styled.div`
  border-left: 1px solid #ccc;
  width: 50%;
  padding: 2rem;
`;
const TramiteEstado = styled.div`
  margin-bottom: 5rem;
  background-color: #0097cb8a;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid #fff;
  border-radius: 10px;
  margin-bottom: 1rem;
  transition: 0.4s;
  h3 {
    text-align: center;
    font-size: 1.5rem;
    color: white;
  }
`;
export const BoxEstado = ({ align, estados, tramiteSeleccionado }) => {
  return (
    <>
      {align === "izquierda" ? (
        <BoxIzquierda>
          {estados.map((estado) => (
            <TramiteEstado key={estado.id}>
              <h3>
                {estado.descripcion} {`Tramite ${tramiteSeleccionado}`}
              </h3>
            </TramiteEstado>
          ))}
        </BoxIzquierda>
      ) : (
        <BoxDerecha>
          {estados.map((estado) => (
            <TramiteEstado key={estado.id}>
              <h3>
                {estado.descripcion} {`Tramite ${tramiteSeleccionado}`}
              </h3>
            </TramiteEstado>
          ))}
        </BoxDerecha>
      )}
    </>
  );
};
