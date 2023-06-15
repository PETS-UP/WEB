import React from "react";
import LAPIS from "../../assets/icons/LAPIS.png";

function LinhaTabelaServico({ id, nome, preco, descricao }) {
  return (
    <>
      <tr>
        <td>{nome}</td>
        <td>{preco}</td>
        <td>{descricao}</td>
        <td>
          <div className="content-lixeira-icon">
            <div className="lixeira-icon-meus-pets">
              <img onClick={() => editarServico(id)} src={LAPIS} alt="" />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

export default LinhaTabelaServico;
