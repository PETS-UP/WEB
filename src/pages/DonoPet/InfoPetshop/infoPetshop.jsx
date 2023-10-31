import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { ToastComponent } from "../../../components/Toast/Toast";

import api from "../../../api";
import Menu from "../../../components/Base/Menu/menu";

import "../../stylepadrao.css";
import "../InfoPetshop/styleinfopetshop.css";
import CardPetshopPerfil from "../../../components/Base/CardPetshop/cardPetshopPerfil";
import imgPetshop from "../../../assets/icons/ICON-PETSHOP.png";
import Swal from "sweetalert2";

export default function infoPetshop() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [idPet, setIdPet] = useState();
  const [idServico, setIdServico] = useState();

  const [listaPets, setListaPets] = useState([]);
  const [listaServicos, setListaServicos] = useState([]);
  const [petshop, setPetshop] = useState({});
  const [avaliacao, setAvaliacao] = useState();
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
        console.log("Petshop: " + resposta.data.imagemPerfil)
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
      .then((response) => {
        console.log(response.data);
        setListaPets(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .get(`/clientes/avaliacao/${sessionStorage.ID_CLIENTE}/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.nota);
          setAvaliacao(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    api
      .get(`/favoritos/${sessionStorage.ID_CLIENTE}/favoritado/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setIsFavorite(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

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
        ToastComponent({
          title: "Agendamento realizado com sucesso!",
          icon: "success"
        });
      })
      .catch((error) => {
        console.log(error);
        ToastComponent({
          title: "Não foi possível realizar o agendamento.",
          text: "Por favor, tente novamente.",
          icon: "error"
        });
      });
  }

  function favoritar() {
    if (!isFavorite) {
      api
        .post(`/favoritos/${sessionStorage.ID_CLIENTE}/${id}`, {}, {
          headers: {
            Authorization: `Bearer ${sessionStorage.JWT}`,
          },
        })
        .then((response) => {
          setIsFavorite(true)
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
                    ToastComponent({
                      title: "Não foi possível realizar a inscrição.",
                      text: "Por favor, tente novamente.",
                      icon: "error"
                    });
                    console.log(erro);
                  })
              }
              ToastComponent({
                title: "Pet shop favoritado com sucesso!",
                icon: "success"
              });
            })
          console.log(response);
        }).catch((erro) => {
          ToastComponent({
            title: "Não foi possível favoritar o pet shop.",
            text: "Por favor, tente novamente.",
            icon: "error"
          });
          console.log(erro);
        })
    } else {
      api
        .delete(`/favoritos/${sessionStorage.ID_CLIENTE}/${id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.JWT}`,
          },
        })
        .then((response) => {
          setIsFavorite(false);
        }).catch((erro) => {
          ToastComponent({
            title: "Não foi possível desfavoritar o petshop",
            text: "Por favor, tente novamente.",
            icon: "error"
          });
          console.log(erro);
        })
    }
  }

  function avaliar(stars) {

    setEstrelas(stars);

    api
      .post(`/clientes/avaliar/${sessionStorage.ID_CLIENTE}/${id}`, {
        id: avaliacao !== undefined ? avaliacao.id : null,
        nota: stars
      }, {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((response) => {
        console.log(response);
      }).catch((erro) => {
        ToastComponent({
          title: "Não foi possível realizar a avaliação",
          text: "Por favor, tente novamente.",
          icon: "error"
        });
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

  console.log("Aqui está a imagem: " + petshop.imagemPerfil)

  return (
    <div className="container-main">
      <Menu />
      <div className="content">
        <div className="card-petshop-info-petshop">
          <CardPetshopPerfil
            id={id}
            nome={petshop.nome}
            rua={petshop.rua}
            numero={petshop.numero}
            telefone={petshop.telefone}
            status={
              petshop.open ? (
                <p style={{ color: 'green' }}>Aberto</p>
              ) : (
                <p style={{ color: 'red' }}>Fechado agora</p>
              )
            }
            imagemPerfil={petshop.imagemPerfil}
            handleStarClick={avaliar}
            isFavorite={isFavorite}
            toggleFavorite={favoritar}
          />
        </div>

        <div className="info-petshop-servicos">
          <p>Selecione o Serviço</p>
          <div className="info-petshop-card-servicos">
            {listaServicos.length > 0 ? (
              listaServicos.map((servico) => {
                const formattedName = servico.nome
                  .toLowerCase()
                  .split('_')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');

                return (
                  <button
                    key={servico.id}
                    onClick={() => setIdServico(servico.id)}
                    style={{ backgroundColor: idServico === servico.id ? "#451935" : "" }}
                  >
                    {formattedName}
                  </button>
                );
              })
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
