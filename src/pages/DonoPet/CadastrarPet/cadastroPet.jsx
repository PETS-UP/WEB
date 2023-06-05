import '../CadastrarPet/cadastroPet.css'
import React, { useState } from 'react';
import Menu from '../../../components/Base/Menu/menu'
import DOG from '../../../assets/icons/DOG-ICON.png'
import CAT from '../../../assets/icons/CAT-ICON.png'
import ROEDOR from '../../../assets/icons/ROEDOR-ICON.png'
import BUNNY from '../../../assets/icons/BUNNY-ICON.png'
import MALE from '../../../assets/icons/MALE-ICON.png'
import FEMALE from '../../../assets/icons/FEMALE-ICON.png'
import PERFIL from '../../../assets/icons/PERFILPET-ICON.png'


const CadastrarPet = () => {

    const [currentPage, setCurrentPage] = useState(0);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

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

                            <div className='card1-cadastro-pet'>
                                <img src={DOG} alt="" />
                                <p>Cachorro</p>
                            </div>

                            <div className='card2-cadastro-pet'>
                                <img src={CAT} alt="" />
                                <p>Gato</p>
                            </div>

                            <div className='card3-cadastro-pet'>
                                <img src={BUNNY} alt="" />
                                <p>Coelho</p>
                            </div>

                            <div className='card4-cadastro-pet'>
                                <img src={ROEDOR} alt="" />
                                <p>Roedor</p>
                            </div>

                        </div>

                        <div className='btn-navegacao-cadastro-pet'>
                            {/* <button className='anterior' onClick={handlePrevPage} disabled={currentPage === 0}>
                                Anterior
                            </button> */}
                            <button className='proximo' onClick={handleNextPage} disabled={currentPage === 3}>
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

                            <div className='card1-cadastro-pet'>
                                <img src={MALE} alt="" />
                                <p>Macho</p>
                            </div>

                            <div className='card2-cadastro-pet'>
                                <img src={FEMALE} alt="" />
                                <p>Fêmea</p>
                            </div>

                        </div>

                        <div className='btn-navegacao-cadastro-pet'>
                            <button className='anterior' onClick={handlePrevPage} disabled={currentPage === 0}>
                                Anterior
                            </button>
                            <button className='proximo' onClick={handleNextPage} disabled={currentPage === 3}>
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

                            <label htmlFor="">Nome:</label>
                            <input type="text" />

                        </div>

                        <div className='btn-navegacao-cadastro-pet'>
                            <button className='anterior' onClick={handlePrevPage} disabled={currentPage === 0}>
                                Anterior
                            </button>
                            <button className='proximo' onClick={handleNextPage} disabled={currentPage === 3}>
                                Próximo
                            </button>
                        </div>

                    </div>
                );
            case 3:
                return (

                    <div className='content-cadastro-pet-especie'>

                        <div className='titulo-cadastro-pet'>
                            <h2>
                                Foto do pet
                            </h2>
                        </div>

                        <div className='borda-cadastro-pet'></div>

                        <div className='content-foto-cadastro-pet'>

                            <div className='fotinha-cadastro-pet'>

                                <div className='foto-perfil-cadastro-pet'>
                                    <img src={PERFIL} alt="" />
                                </div>

                                <button className='adc-foto-cadastro-pet' >Adicionar foto</button>

                            </div>

                            <div className='btn-finalizar-cadastro-pet'>
                                <button className='btn-finalizar-cadastro-pet'>Finalizar</button>
                            </div>

                        </div>

                        <div className='btn-navegacao-cadastro-pet'>
                            <button className='anterior' onClick={handlePrevPage} disabled={currentPage === 0}>
                                Anterior
                            </button>
                            {/* <button className='proximo' onClick={handleNextPage} disabled={currentPage === 3}>
                                Próximo
                            </button> */}
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