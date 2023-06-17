import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalServico.css";
import ImageModal from "../../../../../assets/images/COMPUTADOR.png";
import { Form } from "react-bootstrap";
import api from "../../../../../api";
import { ToastComponent } from "../../../../../components/Toast/Toast";

function ModalServico({ show, handleClose, dados, isEdit }) {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleAddService() {
    api
      .post(
        "/servicos",

        {
          nome: nome,
          preco: preco,
          descricao: descricao,
        },
        {
          params: {
            id: sessionStorage.ID_PETSHOP,
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.JWT}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          ToastComponent("Serviço cadastrado com sucesso!", "", true);
          onCloseModal();
        }

        // setListaServicos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const fetchInformation = () => {
    if (isEdit) {
      setId(dados.id);
      setNome(dados.nome);
      setPreco(parseFloat(dados.preco.replace("R$", "")));
      setDescricao(dados.descricao);
    }
  };

  const onCloseModal = () => {
    setId(-1);
    setNome("");
    setPreco("");
    setDescricao("");
    handleClose();
  };

  useEffect(() => {
    fetchInformation();
  }, [dados]);

  function handleEditService() {
    api
      .patch(
        "/petshops/atualizar/preco",
        {
          nome: nome,
          preco: preco,
          descricao: descricao,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.JWT}`,
          },
          params: {
            idServico: id,
            idPetshop: sessionStorage.ID_PETSHOP,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          ToastComponent("Preço do serviço atualizado com sucesso", "", true);
          onCloseModal();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Modal fullscreen={true} show={show} onHide={onCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: 20 }}>Adicionar Serviço</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#7e2c61" }}>
        <div id="Container">
          <div className="Divisor">
            <img src={ImageModal} style={{ height: 500 }} />
          </div>
          <div className="Divisor">
            <div id="CardForm">
              <div className="DivisorInput">
                <label htmlFor="">Nome</label>
                <Form.Select
                  style={{
                    width: "400px",
                    height: "50px",
                    backgroundColor: "transparent",
                    borderRadius: "0",
                    marginBottom: "20px",
                  }}
                  aria-label="Default select example"
                  onChange={(e) => setNome(e.target.value)}
                  value={nome}
                  disabled={isEdit && true}
                >
                  <option>Selecione a opção de serviço</option>
                  <option value="BANHO">Banho</option>
                  <option value="TOSA">Tosa</option>
                  <option value="BANHO_E_TOSA">Banho & Tosa</option>
                </Form.Select>
              </div>
              <div className="DivisorInput">
                <label htmlFor="">Valor</label>
                <input
                  className="Input"
                  type="number"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  placeholder="R$0,00"
                />
              </div>
              <div className="DivisorInput">
                <label htmlFor="">Descrição</label>
                <textarea
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  style={{ backgroundColor: "transparent" }}
                  rows={5}
                  className="TextArea"
                  placeholder="Faça uma descrição sobre o serviço"
                  disabled={isEdit && true}
                />
              </div>

              <button
                onClick={() => {
                  isEdit ? handleEditService() : handleAddService();
                }}
                className="ButtonRegister"
              >
                {isEdit ? "Atualizar Serviço" : "Adicionar Serviço"}
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalServico;
