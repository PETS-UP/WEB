import React from "react";
import LIXEIRA from "../../assets/icons/LIXEIRA-ICON.png";

function LinhaTabelaServico({ id, nome, preco, descricao }) {
  return (
    <>
      <tr>
        <td>Banho</td>
        <td>R$ 15,00</td>
        <td>Editar</td>
        <td>
          <div className="content-lixeira-icon">
            <div className="lixeira-icon-meus-pets">
              <img onClick={() => deletarPet(id)} src={LIXEIRA} alt="" />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

export default LinhaTabelaServico;
