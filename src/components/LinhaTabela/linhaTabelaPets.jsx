import React from "react";
import LIXEIRA from "../../assets/icons/LIXEIRA-ICON.png";

function LinhaTabelaPets({ id, nome, especie, sexo, deletarPet }) {
  return (
    <>
      <tr>
        <td>{nome}</td>
        <td>{especie}</td>
        <td>{sexo}</td>
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

export default LinhaTabelaPets;
