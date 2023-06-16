import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";

import api from "../../../api";
import Menu from "../../../components/Base/Menu/menu";

import "../../stylepadrao.css";
import "../InfoPetshop/styleinfopetshop.css";

export default function infoPetshop() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [idPet, setIdPet] = useState();
  const [idServico, setIdServico] = useState();

  const [listaPets, setListaPets] = useState([]);
  const [listaServicos, setListaServicos] = useState([]);

  const [time, setTime] = useState();
  const [hour, setHour] = useState();
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

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
            dataHora: date + "T" + time
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.JWT}`,
          },
        }
      )
      .then(({ data }) => {
        console.log("funcionou");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleDayClick = (value) => {
    setSelectedDate(value);
    console.log(value.toISOString());
  };

  return (
    <div className="container-main">
      <Menu />
      <div className="content">
        <div className="info-petshop-servicos">
          <p>Selecione o Pet</p>
          <div className="info-petshop-card-servicos">
            {listaPets.length > 0 ? (
              listaPets.map((pet) => (
                <button key={pet.id} onClick={() => setIdPet(pet.id)}>{pet.nome}</button>
              ))
            ) : (
              <p>
                Você ainda não possui pets adicione pets clicando
                <span onClick={() => navigate(`/meus-pets`)}> aqui</span>
              </p>
            )}
          </div>
        </div>

        <div className="info-petshop-servicos">
          <p>Selecione o Serviço</p>
          <div className="info-petshop-card-servicos">
            {listaServicos.length > 0 ? (
              listaServicos.map((servico) => (
                <button key={servico.id} onClick={() => setIdServico(servico.id)}>
                  {servico.nome}
                </button>
              ))
            ) : (
              <p>O petshop selecionado não possui serviços</p>
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
            <input
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
