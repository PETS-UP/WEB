import '../QuemSomos/quemSomos.css';
import PessoaComCachorros from '../../assets/images/IMAGES-CONTENT-HOMEPAGE-2.png';
import PessoaComCachorro from '../../assets/images/IMAGES-CONTENT-HOMEPAGE.png';

const QuemSomos = () => {
    return (
        <div className="content-main">
            <div className='titulo'>
                <p>Quem Somos</p>
            </div>
            <div className='borda'></div>
            {/* <div className='imagem-corpo1'>
                <img src={PessoaComCachorros} alt="pessoa-com-cachorros" />
                <p className='text'>
                    A PetsUp tem como objetivo
                    proporcionar facilidade na busca
                    por um pet shop e seus serviços
                    de forma online por meio de um
                    sistema de geolocalização e
                    agendamento remoto.
                </p>
            </div> */}
            <div className="imagem-corpo">
                <div className='div-content'>
                    <div className='img1'>
                        <img src={PessoaComCachorros} alt="" />
                    </div>
                    <div className='text1'>
                        <p>A PetsUp tem como objetivo
                            proporcionar facilidade na busca
                            por um pet shop e seus serviços
                            de forma online por meio de um
                            sistema de geolocalização e
                            agendamento remoto.</p>
                    </div>
                </div>
                <div className='div-content'>
                    <div className='text2'>
                        <p>
                            Criada para os pais de pets, a
                            PetsUp visa resolver um
                            grande problema: a busca por
                            um pet shop, de forma
                            simples e funcional.
                        </p>
                    </div>
                    <div className='img2'>
                        <img src={PessoaComCachorro} alt="" />
                    </div>
                </div>
            </div>
            <div className='borda2'></div>
        </div>

    );
}

export default QuemSomos;