import '../CadastrarPet/cadastroPet.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../api';
import Menu from '../../../components/Base/Menu/menu'
import DOG from '../../../assets/icons/DOG-ICON.png'
import CAT from '../../../assets/icons/CAT-ICON.png'
import ROEDOR from '../../../assets/icons/ROEDOR-ICON.png'
import BUNNY from '../../../assets/icons/BUNNY-ICON.png'
import MALE from '../../../assets/icons/MALE-ICON.png'
import FEMALE from '../../../assets/icons/FEMALE-ICON.png'
import PERFIL from '../../../assets/icons/PERFILPET-ICON.png'


const CadastrarPet = () => {
    const [selectTypeOfPet, setSelectTypeOfPet] = useState();
    const [selectTypeOfGender, setSelectTypeOfGender] = useState();
    const [name, setName] = useState();
    const [currentPage, setCurrentPage] = useState(0);

    const navigate = useNavigate();

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    useEffect(() => {
        api.post("/pets/limpa-pilha", {
            headers: {
                Authorization: `Bearer ${sessionStorage.JWT}`
            }
        })
        .then((response) => {
            console.log(response)
        }).catch((erro) => {
            console.log(erro)
        })
    }, []);

    function salvarNaPilha(objeto) {
        api.post("/pets/adicionar-pilha", objeto, {
            headers: {
                Authorization: `Bearer ${sessionStorage.JWT}`
            }
        })
        .then((response) => {
            console.log(response)
        }).catch((erro) => {
            console.log(erro)
        })
    }

    function removerDaPilha() {
        api.get("/pets/pop-pilha", {
            headers: {
                Authorization: `Bearer ${sessionStorage.JWT}`
            }
        })
        .then((response) => {
            console.log(response)
        }).catch((erro) => {
            console.log(erro)
        })
    }

    function cadastrarPet() {
        api.post("/pets", {
            params: { idCliente: sessionStorage.ID_CLIENTE },
            headers: { Authorization: `Bearer ${sessionStorage.JWT}` },
        })
        .then((response) => {
            console.log(response)
        }).catch((erro) => {
            console.log(erro)
        })
    }

    const renderPageContent = () => {
        switch (currentPage) {
            case 0:
                return (
                    <div className='content-cadastro-pet-especie'>

                        <div className='titulo-cadastro-pet'>
                            <h2>
                                Qual a espécie do seu pet?
                            </h2>
                        </div>

                        <div className='borda-cadastro-pet'></div>

                        <div className='cards-cadastro-pet'>

                            <div style={{ border: selectTypeOfPet === 'Cachorro' ? '5px dashed black' : '' }}
                                onClick={() => setSelectTypeOfPet('Cachorro')}
                                className='card1-cadastro-pet'>
                                <img src={DOG} alt="" />
                                <p>Cachorro</p>
                            </div>

                            <div className='card2-cadastro-pet' style={{ border: selectTypeOfPet === 'Gato' ? '5px dashed black' : '' }}
                                onClick={() => setSelectTypeOfPet('Gato')}>
                                <img src={CAT} alt="" />
                                <p>Gato</p>
                            </div>

                            <div className='card3-cadastro-pet' style={{ border: selectTypeOfPet === 'Coelho' ? '5px dashed black' : '' }}
                                onClick={() => setSelectTypeOfPet('Coelho')}>
                                <img src={BUNNY} alt="" />
                                <p>Coelho</p>
                            </div>

                            <div className='card4-cadastro-pet' style={{ border: selectTypeOfPet === 'Roedor' ? '5px dashed black' : '' }}
                                onClick={() => setSelectTypeOfPet('Roedor')}>
                                <img src={ROEDOR} alt="" />
                                <p>Roedor</p>
                            </div>

                        </div>

                        <div className='btn-navegacao-cadastro-pet'>
                            {/* <button className='anterior' onClick={handlePrevPage} disabled={currentPage === 0}>
                                Anterior
                            </button> */}
                            <button className='proximo' onClick={() => { salvarNaPilha(selectTypeOfPet), handleNextPage(), console.log(selectTypeOfPet) }} disabled={currentPage === 3}>
                                Próximo
                            </button>
                        </div>

                    </div>
                );
            case 1:
                return (
                    <div className='content-cadastro-pet-especie'>

                        <div className='titulo-cadastro-pet'>
                            <h2>
                                Qual o sexo do seu pet?
                            </h2>
                        </div>

                        <div className='borda-cadastro-pet'></div>

                        <div className='cards-cadastro-pet-genero'>

                            <div className='card1-cadastro-pet' style={{ border: selectTypeOfGender === 'Male' ? '5px dashed black' : '' }}
                                onClick={() => setSelectTypeOfGender('Male')}>

                                <img src={MALE} alt="" />
                                <p>Macho</p>
                            </div>

                            <div className='card2-cadastro-pet' style={{ border: selectTypeOfGender === 'Female' ? '5px dashed black' : '' }}
                                onClick={() => setSelectTypeOfGender('Female')}>
                                <img src={FEMALE} alt="" />
                                <p>Fêmea</p>
                            </div>

                        </div>

                        <div className='btn-navegacao-cadastro-pet'>
                            <button className='anterior' onClick={() => { removerDaPilha(), handlePrevPage() }} disabled={currentPage === 0}>
                                Anterior
                            </button>
                            <button className='proximo' onClick={() => { salvarNaPilha(selectTypeOfGender), handleNextPage() }} disabled={currentPage === 3}>
                                Próximo
                            </button>
                        </div>

                    </div>
                );
            case 2:
                return (
                    <div className='content-cadastro-pet-especie'>

                        <div className='titulo-cadastro-pet'>
                            <h2>
                                Qual o nome do seu pet?
                            </h2>
                        </div>

                        <div className='borda-cadastro-pet'></div>

                        <div className='input-cadastro-pet'>

                            <div className='foto-perfil-cadastro-pet'>
                                <img src={PERFIL} alt="" />
                            </div>

                            <label htmlFor="">Nome:</label>
                            <input type="text" />

                            <div className='btn-finalizar-cadastro-pet'>
                                <button onClick={() => { salvarNaPilha(name),  navigate('/meus-pets') }} className='btn-finalizar-cadastro-pet'>Finalizar</button>
                            </div>


                        </div>

                        <div className='btn-navegacao-cadastro-pet'>
                            <button className='anterior' onClick={handlePrevPage} disabled={currentPage === 0}>
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
        <div className='main-cadastro-pet'>
            <Menu />
            <div className='content-cadastro-pet-especie'>

                <div className='cards-cadastro-pet'>
                    {renderPageContent()}
                </div>

            </div>
        </div>
    );
};

export default CadastrarPet; 