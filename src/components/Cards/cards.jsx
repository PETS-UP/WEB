import '../Cards/cards.css'
import LUPA from '../../assets/images/LUPA.png'
import CALENDARIO from '../../assets/images/CALENDARIO.png'
import CHAT from '../../assets/images/CHAT.png'
import COMPUTADOR from '../../assets/images/COMPUTADOR.png'


const Cards = () => {
    return (

        <div className='main-cards'>

            <div className='textos-cards'>

                <div className='titulo-cards'>
                    <h2>
                        Rápido e prático, conheça
                        nossas soluções.
                    </h2>
                </div>

                <div className='slogan-cards'>
                    <p>
                        Muito mais que um App.
                    </p>
                </div>

            </div>

            <div className='container-cards'>

                <div className='card1'>

                    <div className='borda-card1'>

                        <div className='fotinha1'>
                            <img src={LUPA} alt="" />
                        </div>
                    </div>
                    <div className='txt-card1'>
                        <p>
                            Geolocalização para
                            facilitar a sua busca por
                            um pet shop perto de você.
                        </p>
                    </div>

                </div>

                <div className='card2'>

                    <div className='borda-card2'>

                        <div className='fotinha2'>
                            <img src={CALENDARIO} alt="" />
                        </div>
                    </div>
                    <div className='txt-card2'>
                        <p>
                            Agendamento remoto via aplicativo
                            para você escolher o melhor horário
                            e o melhor lugar.
                        </p>
                    </div>
                </div>

                <div className='card3'>
                    <div className='borda-card3'>

                        <div className='fotinha3'>
                            <img src={CHAT} alt="" />
                        </div>

                    </div>

                    <div className='txt-card3'>
                        <p>
                            Um chat que conecta você com
                            o estabelecimento de forma
                            rápida e prática.
                        </p>
                    </div>
                </div>

                <div className='card4'>
                    <div className='borda-card4'>

                        <div className='fotinha4'>
                            <img src={COMPUTADOR} alt="" />
                        </div>

                    </div>

                    <div className='txt-card4'>
                        <p>
                            Acompanhe o status do seu pet
                            em tempo real durante a consulta.
                        </p>
                    </div>
                </div>

            </div>

            <div className="button-cards">
                <div className='txt-tittle'>
                    <h2>
                        <b>Conheça nosso app</b>
                    </h2>
                </div>

                <div className='button-inscrever'>
                    <button>Quero me inscrever</button>
                </div>
            </div>

        </div >

    );
}

export default Cards;