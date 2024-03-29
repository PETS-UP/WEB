import api from "../../../api";
import Menu from "../../../components/Base/Menu/menu";
import "../Inicio/styleinicio.css";
import React, { useEffect } from "react";
import "../../stylepadrao.css";
import { useState } from "react";
import CardPetshop from "../../../components/Base/CardPetshop/CardPetshop";
import iconBusca from "../../../assets/icons/ICON-BUSCA.png";

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

    api
      .get(`/clientes/${sessionStorage.ID_CLIENTE}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((resposta) => {
        sessionStorage.IMG_PERFIL = resposta.data.imagemPerfil
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

    api.patch(
      `/clientes/latitude-longitude/${sessionStorage.ID_CLIENTE}/${latitude}/${longitude}`,
      {}, {
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
    api.get(`/clientes/petshops-proximos/${sessionStorage.ID_CLIENTE}`, {
      headers: { Authorization: `Bearer ${sessionStorage.JWT}` },
    })
      .then((response) => {
        setPetshops(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function getPetshopsMediaAvaliacao() {
    api.get(`/clientes/ordenar-media-avaliacao`, {
      headers: { Authorization: `Bearer ${sessionStorage.JWT}` },
    })
      .then((response) => {
        setPetshops(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function getPetshopsMediaPreco() {
    api.get(`/clientes/ordenar-media-preco`, {
      headers: { Authorization: `Bearer ${sessionStorage.JWT}` },
    })
      .then((response) => {
        setPetshops(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function getPetshopsFavoritos() {
    api.get(`/favoritos/${sessionStorage.ID_CLIENTE}`, {
      headers: { Authorization: `Bearer ${sessionStorage.JWT}` },
    })
      .then((response) => {
        setPetshops(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      })
  }

  const [petshops, setPetshops] = useState([]);
  const servicos = "Banho & Tosa";

  return (
    <div className="container-main">
      <Menu />
      <div className="content">
        <div className="filter">
          <div className="filter-header">
            <button>
              <img
                className="image-button"
                src={iconBusca}
              />
            </button>
            <input
              type="search"
              name="busca"
              placeholder="Digite aqui o nome do petshop"
            />
          </div>
          <div className="filter-buttons">
            <button onClick={getPetshopsProximos}>Próximos de mim</button>
            <button onClick={getPetshopsMediaPreco}>Melhores preços</button>
            <button onClick={getPetshopsMediaAvaliacao}>Melhores avaliações</button>
            <button onClick={getPetshopsFavoritos}>Meus favoritos</button>
          </div>
        </div>

        <div className="cards-petshop">
          {petshops.length > 0 && petshops.map((petshop) => {
            console.log(petshop)

            return (
              <React.Fragment key={petshop.id}>
                <CardPetshop
                  id={petshop.id}
                  nome={petshop.nome}
                  rua={petshop.rua}
                  numero={petshop.numero}
                  servicos={servicos}
                  status={
                    petshop.open ? (
                      <p style={{ color: 'green' }}>Aberto</p>
                    ) : (
                      <p style={{ color: 'red' }}>Fechado agora</p>
                    )
                  }
                  imagem={petshop.imagemPerfil}
                  nota={petshop.nota.toFixed(1)}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
