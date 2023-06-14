import React from "react";

function LinhaTabelaPet({ data }) {
  return (
    <>
      {data?.map((pet, index) => (
        <tr key={index}>
          <td>{pet.nome}</td>
          <td>{pet.tipo}</td>
          <td>
            <div className="content-lixeira-icon">
              <div className="lixeira-icon-meus-pets">
                <img onClick={deletarPet} src={LIXEIRA} alt="" />
              </div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default LinhaTabelaPet;
