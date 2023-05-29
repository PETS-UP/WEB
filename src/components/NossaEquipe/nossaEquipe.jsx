import '../NossaEquipe/nossaEquipe.css';
import NOGUEIRA from '../../assets/images/NOGUEIRA.png';
import BELTRAO from '../../assets/images/BELTRAO.png';
import FERRAZ from '../../assets/images/FERRAZ.png';
import MAURICIO from '../../assets/images/MAURICIO.png';
import WILLIAM from '../../assets/images/WILLIAM.png';


const NossaEquipe = () => {
    return (
        <div className="main">
            <div className='titulo'>
                <h2>Nossa Equipe</h2>
            </div>
            <div className="borda3"></div>

            <div className='conteudo-retangulo'>

                <div className='retangulos'>

                    <div className='retangulo1'>

                        <div className='circulo1'><img src={NOGUEIRA} alt="" /></div>
                        <div className='content-textos1'>
                            <div className='nome1'>
                                <h4>Gabriel Nogueira</h4>
                                <div className="bordinha"></div>
                            </div>
                            <div className='content-text1'>
                                <p>
                                    “O talento vence jogos, mas só o trabalho em equipe ganha campeonatos.”
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='retangulo2'>

                        <div className='circulo2'><img src={FERRAZ} alt="" /></div>
                        <div className='content-textos2'>
                            <div className='nome2'>
                                <h4>Matheus Ferraz</h4>
                                <div className="bordinha2"></div>
                            </div>
                            <div className='content-text2'>
                                <p>
                                    “O sucesso de um empresa é o resultado do trabalho de uma grande equipe. ”
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='retangulos2'>

                    <div className='retangulo3'>
                        <div className='circulo3'><img src={BELTRAO} alt="" /></div>
                        <div className='content-textos3'>
                            <div className='nome3'>
                                <h4>Henrique Beltrão</h4>
                                <div className="bordinha3"></div>
                            </div>
                            <div className='content-text3'>
                                <p>
                                    “O melhor pensamento para exemplificar o que é trabalho em equipe: A união faz a força!”
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='retangulo4'>
                        <div className='circulo4'><img src={MAURICIO} alt="" /></div>
                        <div className='content-textos4'>
                            <div className='nome4'>
                                <h4>Mauricio Massayuki</h4>
                                <div className="bordinha4"></div>
                            </div>
                            <div className='content-text4'>
                                <p>
                                    “No trabalho em equipe, só tem uma forma de fazer um resultado excelente: é fazermos juntos.”
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='retangulos3'>
                <div className='retangulo5'>
                    <div className='circulo5'><img src={WILLIAM} alt="" /></div>
                    <div className='content-textos5'>
                        <div className='nome5'>
                            <h4>William Matos</h4>
                            <div className="bordinha5"></div>
                        </div>
                        <div className='content-text5'>
                            <p>
                                “O segredo de um grande sucesso esta no trabalho de uma grande equipe.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default NossaEquipe;