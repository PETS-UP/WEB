import React from "react";
import LAPIS from "../../assets/icons/LAPIS.png";

function LinhaTabelaServico({ id, nome, preco, descricao, handleEdit }) {
  return (
    <>
      <tr>
        <td>{nome}</td>
        <td>{preco}</td>
        <td>{descricao}</td>
        <td>
          <div className="content-edit-icon">
            <div className="edit-icon-servicos" style={{ width: 30, height: 30}}>
              <img style={{width: 20, height: 20}} onClick={() => handleEdit({id, nome, preco, descricao})} src={LAPIS} alt="" />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

export default LinhaTabelaServico;
