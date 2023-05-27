import '../FooterHome/footerHome.css'
import TWITTER from '../../assets/icons/TWITTER.svg'
import INSTAGRAM from '../../assets/icons/INSTAGRAM.svg'
import FACEBOOK from '../../assets/icons/FACEBOOK.svg'
import LOGO from '../../assets/icons/ICON-LOGO.svg'

const FooterHome = () => {
    return (

        <div className='main-footer'>

            <div className='container-footer'>

                <div className='coluna-footer1'>

                    <div className='titulo-footer1'>
                        <h2>GitHub</h2>
                    </div>

                    <div className='text1-footer'>
                        <p>Projeto</p>
                    </div>

                    <div className='text2-footer'>
                        <p>Contexto</p>
                    </div>

                    <div className='text3-footer'>
                        <p>Justificativa</p>
                    </div>

                </div>

                <div className='coluna-footer2'>

                    <div className='titulo-footer2'>
                        <h2>Soluções</h2>
                    </div>

                    <div className='text4-footer'>
                        <p>Geolocalização</p>
                    </div>

                    <div className='text5-footer'>
                        <p>Agendamento</p>
                    </div>

                    <div className='text6-footer'>
                        <p>Diversidade</p>
                    </div>

                </div>

                <div className='coluna-footer3'>

                    <div className='titulo-footer3'>
                        <h2>Sobre o app</h2>
                    </div>

                    <div className='text7-footer'>
                        <p>Como baixar</p>
                    </div>

                    <div className='text8-footer'>
                        <p>Como usar</p>
                    </div>

                    <div className='text9-footer'>
                        <p>Ajuda</p>
                    </div>

                </div>

                <div className='coluna-footer4'>

                    <div className='titulo-footer4'>
                        <h2>Redes</h2>
                    </div>

                    <div className='text10-footer'>
                        <img src={TWITTER} alt="" />
                    </div>

                    <div className='text11-footer'>
                        <img src={INSTAGRAM} alt="" />
                    </div>

                    <div className='text12-footer'>
                        <img src={FACEBOOK} alt="" />
                    </div>

                </div>

            </div>

            <div className='borda-footer'></div>

            <div className='content-final'>
                <div className='content-final-footer'>
                    <img src={LOGO} alt="" />
                    <p>© Copyright 2023 - PetsUp - Todos os direitos reservados</p>
                </div>
            </div>

        </div>

    );
}

export default FooterHome;