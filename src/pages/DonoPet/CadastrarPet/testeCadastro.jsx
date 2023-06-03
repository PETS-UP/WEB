import React, { useState } from 'react';
import '../CadastrarPet/testeCadastro.css';
import Menu from '../../../components/Base/Menu/menu';
import DOG from '../../../assets/icons/DOG-ICON.png';
import CAT from '../../../assets/icons/CAT-ICON.png';
import ROEDOR from '../../../assets/icons/ROEDOR-ICON.png';
import BUNNY from '../../../assets/icons/BUNNY-ICON.png';



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
                                <img src={DOG} alt="" />
                                <p>Macho</p>
                            </div>

                            <div className='card2-cadastro-pet'>
                                <img src={CAT} alt="" />
                                <p>Fêmea</p>
                            </div>

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
                                <button className='adc-foto-cadastro-pet' >Adicionar foto</button>
                            </div>

                            <button className='btn-finalizar-cadastro-pet'>Finalizar</button>

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

                <div className='buttons'>
                    <button onClick={handlePrevPage} disabled={currentPage === 0}>
                        Anterior
                    </button>
                    <button onClick={handleNextPage} disabled={currentPage === 3}>
                        Próximo
                    </button>
                </div>
            </div>
        </div>
    );
};



export default CadastrarPet;