import '../CadastrarPet/cadastroPet.css'
import Menu from '../../../components/Base/Menu/menu'
import DOG from '../../../assets/icons/DOG-ICON.png'
import CAT from '../../../assets/icons/CAT-ICON.png'
import ROEDOR from '../../../assets/icons/ROEDOR-ICON.png'
import BUNNY from '../../../assets/icons/BUNNY-ICON.png'


const CadastrarPet = () => {
    return (
        <div className='main-cadastro-pet'>
            <Menu />
            <div className='content-cadastro-pet'>

                <div className='titulo-cadastro-pet'>
                    <h2>
                        Qual a espécie do seu pet?
                    </h2>
                </div>

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
        </div>
    )
}

export default CadastrarPet;