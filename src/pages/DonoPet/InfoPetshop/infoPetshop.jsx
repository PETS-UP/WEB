import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { ToastComponent } from "../../../components/Toast/Toast";
import Swal from "sweetalert2";
import Avaliacao from "../../../components/Avaliacao/avaliacao";

import api from "../../../api";
import Menu from "../../../components/Base/Menu/menu";

import "../../stylepadrao.css";
import "../InfoPetshop/styleinfopetshop.css";
import CardPetshopPerfil from "../../../components/Base/CardPetshop/cardPetshopPerfil";
import imgPetshop from "../../../assets/icons/ICON-PETSHOP.png";
import iconBusca from "../../../assets/icons/ICON-BUSCA.png";

export default function infoPetshop() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [idPet, setIdPet] = useState();
  const [idServico, setIdServico] = useState();

  const [listaPets, setListaPets] = useState([]);
  const [listaServicos, setListaServicos] = useState([]);
  const [petshop, setPetshop] = useState({});
  const [estrelas, setEstrelas] = useState();
  const [isFavorite, setIsFavorite] = useState(false);

  const [time, setTime] = useState();
  const [date, setDate] = useState(new Date());
  const [formatedDate, setFormatedDate] = useState();

  useEffect(() => {
    api
      .get(`/petshops/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((resposta) => {
        setPetshop(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  useEffect(() => {
    api
      .get("/servicos", {
        params: {
          idPetshop: id,
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setListaServicos(data);
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .get("/pets", {
        params: {
          idCliente: sessionStorage.ID_CLIENTE,
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setListaPets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function agendarServico() {
    api
      .post(
        "/agendamentos",
        {},
        {
          params: {
            idCliente: sessionStorage.ID_CLIENTE,
            idPetshop: id,
            idPet: idPet,
            idServico: idServico,
            dataHora: formatedDate + "T" + time + ":00"
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.JWT}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        ToastComponent("Agendamento realizado com sucesso!", "", "success");
      })
      .catch((error) => {
        console.log(error);
        ToastComponent("Não foi possível realizar o agendamento.", "Por favor, tente novamente.", "error");
      });
  }

  function favoritar() {
    if(!isFavorite){
      api
      .post(`/favoritos/${sessionStorage.ID_CLIENTE}/${id}`, {}, {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((response) => {
        setIsFavorite(true);
        Swal.fire({
          title: "Deseja receber notificações deste pet shop via e-mail?",
          showConfirmButton: true,
          showDenyButton: true,
          confirmButtonText: "Sim",
          denyButtonText: "Não",
          confirmButtonColor: "#008000",
        })
          .then((result) => {
            if (result.isConfirmed) {
              api
                .post(`/petshops/inscrever/${id}`, {}, {
                  params: {
                    idCliente: sessionStorage.ID_CLIENTE,
                  },
                  headers: {
                    Authorization: `Bearer ${sessionStorage.JWT}`,
                  },
                })
                .then((response) => {
                  console.log(response);
                }).catch((erro) => {
                  ToastComponent("Não foi possível realizar a inscrição.", "Por favor, tente novamente.", "error");
                  console.log(erro);
                })
            }
            ToastComponent("Pet shop favoritado com sucesso!", "", "success");
          })
        console.log(response);
      }).catch((erro) => {
        ToastComponent("Não foi possível favoritar o pet shop.", "Por favor, tente novamente.", "error");
        console.log(erro);
      })
    }
  }

  function avaliar(stars) {

    setEstrelas(stars);

    api
      .post(`/clientes/avaliar/${sessionStorage.ID_CLIENTE}/${id}`, { nota: stars }, {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((response) => {
        console.log(response);
      }).catch((erro) => {
        ToastComponent("Não foi possível realizar a avaliação", "Por favor, tente novamente.", "error");
        console.log(erro);
      })
  }

  function handleDayClick(value) {
    setDate(value)
    setFormatedDate(formatDate(value))
  };

  function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
  }

  return (
    <div className="container-main">
      <Menu />
      <div className="content">
        <div className="card-petshop-info-petshop">
          <CardPetshopPerfil
            id={petshop.id}
            nome={petshop.nome}
            status={"Aberto agora"}
            imagem={imgPetshop}
            handleStarClick={avaliar}
            estrelas={estrelas}
            isFavorite={isFavorite}
            toggleFavorite={favoritar}
          />
        </div>

        <div className="info-petshop-servicos">
          <p>Selecione o Serviço</p>
          <div className="info-petshop-card-servicos">
            {listaServicos.length > 0 ? (
              listaServicos.map((servico) => (
                <button key={servico.id} onClick={() => setIdServico(servico.id)} style={{
                  backgroundColor: idServico === servico.id ? "#451935" : ""
                }}>
                  {servico.nome}
                </button>
              ))
            ) : (
              <p>O petshop selecionado não possui serviços</p>
            )}
          </div>
        </div>

        <div className="info-petshop-servicos">
          <p>Selecione o Pet</p>
          <div className="info-petshop-card-servicos">
            {listaPets.length > 0 ? (
              listaPets.map((pet) => (
                <button key={pet.id} onClick={() => setIdPet(pet.id)} style={{
                  backgroundColor: idPet === pet.id ? "#451935" : ""
                }}>
                  {pet.nome}
                </button>
              ))
            ) : (
              <p>
                Você ainda não possui pets adicione pets clicando
                <span onClick={() => navigate(`/meus-pets`)}> aqui</span>
              </p>
            )}
          </div>
        </div>

        <div className="info-petshop-agenda">
          <p>Selecione a Data</p>
          <div className="info-petshop-card-agenda">
            <Calendar
              value={date}
              onClickDay={handleDayClick}
            />
            {/* <input
              type="date" 
              value={formatedDate}
              onChange={(e) => setDate(e.target.value)}
            /> */}
          </div>


          <div className="div-horario-info-petshop">
            <p>Insira o horário</p>
            <div className="info-petshop-card-servicos-horario">
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <div className="btn-finalizar-servico">
            <button onClick={agendarServico}>Finalizar pedido</button>
          </div>
        </div>
      </div>
    </div>
  );
}
