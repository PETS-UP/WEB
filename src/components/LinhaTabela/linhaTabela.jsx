import React from "react";

function LinhaTabela({ data }) {
  return (
    <>
      {data?.map((pedido, index) => (
        <tr key={index}>
          <td>{pedido.pet}</td>
          <td>{pedido.servico}</td>
          <td>{pedido.dataHora}</td>
          <td>{pedido.preco}</td>
        </tr>
      ))}
    </>
  );
}

export default LinhaTabela;
