import React from "react";

function LinhaTabela({ nomeCliente, servico, hora }) {
  return (
    <>
      <tr>
        <td>{nomeCliente}</td>
        <td>{servico}</td>
        <td>{hora}</td>
        <td>Aceitar</td>
        <td>Recusar</td>
      </tr>
    </>
  );
}

export default LinhaTabela;
