import Menu from "../../../components/Base/Menu/menu";
import '../Inicio/styleinicio.css';
import ImgPetshop from '../../../assets/images/fofinho-pet-shop-image.jpg';
import React, { useEffect } from "react";
import '../../stylepadrao.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardPetshop from "../../../components/Base/CardPetshop/CardPetshop";

export default function Inicio() {

    useEffect(() => {
        api.get('/petshops')
            .then((resposta) => {
                setPetshops(resposta.data);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []);

    const navigate = useNavigate();

    const [petshops, setPetshops] = useState([]);

    return (
        <div className="container-main">
            
            <Menu/>
            <div className="content">
                <div className="filter">
                    <div className="filter-header">
                       <button><img className="image-button" src="/src/assets/icons/ICON-BUSCA.png"/></button><input type="search" name="busca" placeholder="Digite aqui o nome do petshop"/>
                    </div>
                    <div className="filter-buttons">
                        <button>Melhores preços</button>
                        <button>Melhores avaliações</button>
                        <button>Próximos de mim</button>
                        <button>Meus favoritos</button>
                    </div>
                </div>

                <div className="cards-petshop">
                    {petshops.map((petshop) => (
                        <React.Fragment key={petshop.id}>
                        <CardPetshop 
                            id={petshop.id}
                            nome={petshop.nome}
                            servicos={petshop.servicos}
                            preco={petshop.preco}
                            distancia={petshop.distancia}
                            tempo={petshop.tempo}
                            status={petshop.status}
                            imagem={petshop.imagem}
                        />  
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}