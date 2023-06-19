import React from "react";

function LinhaTabela({ nomeCliente, servico, pet, hora }) {
  return (
    <>
      <tr>
        <td>{nomeCliente}</td>
        <td>{servico}</td>
        <td>{pet}</td>
        <td>{hora}</td>
      </tr>
    </>
  );
}

export default LinhaTabela;
