import "../CadastrarPet/cadastroPet.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastComponent } from "../../../components/Toast/Toast";
import api from "../../../api";
import Menu from "../../../components/Base/Menu/menu";
import DOG from "../../../assets/icons/DOG-ICON.png";
import CAT from "../../../assets/icons/CAT-ICON.png";
import ROEDOR from "../../../assets/icons/ROEDOR-ICON.png";
import BUNNY from "../../../assets/icons/BUNNY-ICON.png";
import MALE from "../../../assets/icons/MALE-ICON.png";
import FEMALE from "../../../assets/icons/FEMALE-ICON.png";
import PERFIL from "../../../assets/icons/PERFILPET-ICON.png";

const CadastrarPet = () => {
  const [selectTypeOfPet, setSelectTypeOfPet] = useState();
  const [selectTypeOfGender, setSelectTypeOfGender] = useState();
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    api
      .post(
        "/pets/limpa-pilha",
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.JWT}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  function salvarNaPilha(texto) {
    console.log(texto);

    api
      .post(
        `/pets/adicionar-pilha/${texto}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.JWT}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function removerDaPilha() {
    api
      .get("/pets/pop-pilha", {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function cadastrarPet() {
    api
      .post(
        "/pets/cadastrar-pilha",
        {},
        {
          params: { idCliente: sessionStorage.ID_CLIENTE },
          headers: { Authorization: `Bearer ${sessionStorage.JWT}` },
        }
      )
      .then((response) => {
        ToastComponent("Pet cadastrado com sucesso!", "", 1500, true, true);
        setTimeout(() => {
          navigate("/meus-pets");
      }, "1500")
      })
      .catch((erro) => {
        console.log(erro);
        ToastComponent("Não foi possível cadastrar o pet.", "Por favor, tente novamente.", 2000, true, false);
      });
  }

  const renderPageContent = () => {
    switch (currentPage) {
      case 0:
        return (
          <div className="content-cadastro-pet-especie">
            <div className="titulo-cadastro-pet">
              <h2>Qual a espécie do seu pet?</h2>
            </div>

            <div className="borda-cadastro-pet"></div>

            <div className="cards-cadastro-pet">
              <div
                style={{
                  border:
                    selectTypeOfPet === "CACHORRO" ? "5px dashed black" : "",
                }}
                onClick={() => setSelectTypeOfPet("CACHORRO")}
                className="card1-cadastro-pet"
              >
                <img src={DOG} alt="" />
                <p>Cachorro</p>
              </div>

              <div
                className="card2-cadastro-pet"
                style={{
                  border: selectTypeOfPet === "GATO" ? "5px dashed black" : "",
                }}
                onClick={() => setSelectTypeOfPet("GATO")}
              >
                <img src={CAT} alt="" />
                <p>Gato</p>
              </div>

              <div
                className="card3-cadastro-pet"
                style={{
                  border:
                    selectTypeOfPet === "COELHO" ? "5px dashed black" : "",
                }}
                onClick={() => setSelectTypeOfPet("COELHO")}
              >
                <img src={BUNNY} alt="" />
                <p>Coelho</p>
              </div>

              <div
                className="card4-cadastro-pet"
                style={{
                  border:
                    selectTypeOfPet === "ROEDOR" ? "5px dashed black" : "",
                }}
                onClick={() => setSelectTypeOfPet("ROEDOR")}
              >
                <img src={ROEDOR} alt="" />
                <p>Roedor</p>
              </div>
            </div>

            <div className="btn-navegacao-cadastro-pet">
              {/* <button className='anterior' onClick={handlePrevPage} disabled={currentPage === 0}>
                                Anterior
                            </button> */}
              <button
                className="proximo"
                onClick={() => {
                  salvarNaPilha(selectTypeOfPet),
                    handleNextPage(),
                    console.log(selectTypeOfPet);
                }}
                disabled={currentPage === 3}
              >
                Próximo
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="content-cadastro-pet-especie">
            <div className="titulo-cadastro-pet">
              <h2>Qual o sexo do seu pet?</h2>
            </div>

            <div className="borda-cadastro-pet"></div>

            <div className="cards-cadastro-pet-genero">
              <div
                className="card1-cadastro-pet"
                style={{
                  border: selectTypeOfGender === "M" ? "5px dashed black" : "",
                }}
                onClick={() => setSelectTypeOfGender("M")}
              >
                <img src={MALE} alt="" />
                <p>Macho</p>
              </div>

              <div
                className="card2-cadastro-pet"
                style={{
                  border: selectTypeOfGender === "F" ? "5px dashed black" : "",
                }}
                onClick={() => setSelectTypeOfGender("F")}
              >
                <img src={FEMALE} alt="" />
                <p>Fêmea</p>
              </div>
            </div>

            <div className="btn-navegacao-cadastro-pet">
              <button
                className="anterior"
                onClick={() => {
                  removerDaPilha(), handlePrevPage();
                }}
                disabled={currentPage === 0}
              >
                Anterior
              </button>
              <button
                className="proximo"
                onClick={() => {
                  salvarNaPilha(selectTypeOfGender), handleNextPage();
                }}
                disabled={currentPage === 3}
              >
                Próximo
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="content-cadastro-pet-especie">
            <div className="titulo-cadastro-pet">
              <h2>Qual o nome do seu pet?</h2>
            </div>

            <div className="borda-cadastro-pet"></div>

            <div className="input-cadastro-pet">
              <div className="foto-perfil-cadastro-pet">
                <img src={PERFIL} alt="" />
              </div>

              <label htmlFor="">Nome:</label>
              <input onChange={(e) => setName(e.target.value)} type="text" />

              <div className="btn-finalizar-cadastro-pet">
                <button
                  onClick={() => {
                    salvarNaPilha(name), cadastrarPet();
                  }}
                  className="btn-finalizar-cadastro-pet"
                >
                  Finalizar
                </button>
              </div>
            </div>

            <div className="btn-navegacao-cadastro-pet">
              <button
                className="anterior"
                onClick={() => {
                  removerDaPilha(), handlePrevPage();
                }}
                disabled={currentPage === 0}
              >
                Anterior
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main-cadastro-pet">
      <Menu />
      <div className="content-cadastro-pet-especie">
        <div className="cards-cadastro-pet">{renderPageContent()}</div>
      </div>
    </div>
  );
};

export default CadastrarPet;
