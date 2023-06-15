import api from "../../../api";
import Menu from "../../../components/Base/Menu/menu";
import "../Inicio/styleinicio.css";
import React, { useEffect } from "react";
import "../../stylepadrao.css";
import { useState } from "react";
import CardPetshop from "../../../components/Base/CardPetshop/CardPetshop";
import imgPetshop from "../../../assets/icons/ICON-PETSHOP.png";

export default function Inicio() {
  useEffect(() => {
    getLocation();

    api
      .get("/petshops", {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((resposta) => {
        setPetshops(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.log("Geolocalização não suportada pelo navegador.");
    }
  }

  function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const local = {
      latitude: latitude,
      longitude: longitude,
    };

    api
      .patch(
        `/clientes/latitude-longitude/${sessionStorage.ID_CLIENTE}/${latitude}/${longitude}`,
        {},
        {
          headers: { Authorization: `Bearer ${sessionStorage.JWT}` },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function errorCallback(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("Permissão para obter localização negada pelo usuário.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Informações de localização não estão disponíveis.");
        break;
      case error.TIMEOUT:
        console.log(
          "Tempo limite da requisição para obter localização foi atingido."
        );
        break;
      case error.UNKNOWN_ERROR:
        console.log("Erro desconhecido ao obter localização.");
        break;
    }
  }

  function getPetshopsProximos() {
    api
      .get(`/clientes/petshops-proximos/${sessionStorage.ID_CLIENTE}`, {
        headers: { Authorization: `Bearer ${sessionStorage.JWT}` },
      })
      .then((response) => {
        setPetshops(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  const [petshops, setPetshops] = useState([]);
  const servicos = "Banho & Tosa";
  const status = "Aberto agora";

  return (
    <div className="container-main">
      <Menu />
      <div className="content">
        <div className="filter">
          <div className="filter-header">
            <button>
              <img
                className="image-button"
                src="/src/assets/icons/ICON-BUSCA.png"
              />
            </button>
            <input
              type="search"
              name="busca"
              placeholder="Digite aqui o nome do petshop"
            />
          </div>
          <div className="filter-buttons">
            <button onClick={getPetshopsProximos()}>Próximos de mim</button>
            <button>Melhores preços</button>
            <button>Melhores avaliações</button>
            <button>Meus favoritos</button>
          </div>
        </div>

        <div className="cards-petshop">
          {petshops.map((petshop) => (
            <React.Fragment key={petshop.id}>
              <CardPetshop
                nome={petshop.nome}
                servicos={servicos}
                status={status}
                imagem={imgPetshop}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
