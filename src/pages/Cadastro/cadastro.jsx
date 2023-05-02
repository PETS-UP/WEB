import './styleCadastro.css';
import Background from '../../assets/images/PETSUP-BACKGROUND-COPIA.png';
import Image from '../../assets/icons/PETSUP-CADASTRO-ICON.png';

const Cadastro = () => {
    return (
        <div className="container">
        <img src={Background} className="imagebg" />
        <div className="modal-login">
        <div className="modal-inputs">
        <div className="form-inputs">
        <div className="inputs-cadastro">
          <p>Faça seu cadastro</p>
          <div className="inputs">
            <div className="inputs-nome">
            <label htmlFor="Nome">Nome</label>
            <input onKeyUp={validarNome} id="input-nome" type="text" placeholder="Digite seu nome aqui"/>
            <div className="frases-validacao" id="frase-nome"></div>
            </div>
            <div className="inputs-email">
            <label htmlFor="Email">E-mail</label>
            <input onKeyUp={validarEmail} id="input-email" type="email" placeholder="Digite seu e-mail aqui"/>
            <div className="frases-validacao" id="frase-email"></div>
            </div>
            <div className="inputs-password">
            <label htmlFor="Senha">Senha</label>
            <input onKeyUp={validarSenha} id="input-senha" type="password" placeholder="*******"/>
            <div className="frases-validacao" id="frase-senha"></div>
            </div>
            <div className="inputs-confirm-password">
            <label htmlFor="Confirmacao-senha">Confirme sua senha</label>
            <input onKeyUp={validarConfirmacaoSenha} id="input-confirmacao-senha" type="password" placeholder="*******"/>
            <div className="frases-validacao" id="frase-confirmacao-senha"></div>
            </div>
            <button onClick={validarCadastroInicial} className="button-cadastro">CADASTRAR</button>
          </div>
        </div>
        </div>
        </div>
        <div className="modal-image">
        <img src={Image} className="image-modal" />
        </div>
        </div>
      </div>
    );
  }
  
  export default Cadastro;