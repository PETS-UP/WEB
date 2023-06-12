import Menu from "../../../components/Base/Menu/menu";
import '../MeusPets/meusPets.css'
import api from '../../../api';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LIXEIRA from '../../../assets/icons/LIXEIRA-ICON.png';
import DOGGO from '../../../assets/icons/DOGHI-ICON.png'
import { Link } from "react-router-dom";
export default function meusPets() {
    const [listaPets, setListaPets] = useState([]);


    const navigate = useNavigate();

    return (

        <div className="container-main-meus-pets">

            <Menu />

            {
                !listaPets ?
                    <div className="content-meus-pets">

                        <div className="titulo-meus-pets">
                            <h2>PETS CADASTRADOS</h2>
                        </div>
                        <div className="selecionaveis-meus-pets">
                            <div className="filtro-pets">

                                <label htmlFor="">Filtrar:</label>
                                <select className="filtro-meus-pets" name="Filtrar" id="">
                                    <option value="nome">Nome</option>
                                    <option value="tipo">Tipo</option>
                                </select>
                            </div>
                            <div className="buscar-meus-pets">
                                <input type="search" name="busca" placeholder="Buscar..." />
                                <button>
                                    <img className="image-button" src="/src/assets/icons/ICON-BUSCA.png" />
                                </button>
                            </div>
                            <button onClick={() => navigate('/cadastrar-pet')} >ADICIONAR PET +</button>
                        </div>
                        <div className="tabela-meus-pets">
                            <table className="table-container">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Tipo</th>
                                        <th>Excluir</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>Cachorro</td>
                                        <td>
                                            <div className="content-lixeira-icon">
                                                <div className="lixeira-icon-meus-pets">
                                                    <img src={LIXEIRA} alt="" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    :

                    <div className="div-pet-empty">
                        <div>
                            <img src={DOGGO} alt="" />
                        </div>
                        <span>Parece que você ainda não cadastrou nenhum pet :c</span>
                        <Link to='/cadastrar-pet'>
                            <button>Adicionar Pet +</button>
                        </Link>
                    </div>
            }
        </div >
    )
}