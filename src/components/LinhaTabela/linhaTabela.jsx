import React from "react";

function LinhaTabela({ pet, servico, dataHora, preco }) {
  return (
    <>
      <tr>
        <td>{pet}</td>
        <td>{servico}</td>
        <td>{dataHora}</td>
        <td>{preco}</td>
      </tr>
    </>
  );
}

export default LinhaTabela;

// key={index}