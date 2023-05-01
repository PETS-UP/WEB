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
            <input type="text" placeholder="Digite seu nome aqui"/>
            </div>
            <div className="inputs-email">
            <label htmlFor="Email">Email</label>
            <input type="email" placeholder="Digite seu email aqui"/>
            </div>
            <div className="inputs-password">
            <label htmlFor="Email">Senha</label>
            <input type="password" placeholder="*******"/>
            </div>
            <div className="inputs-confirm-password">
            <label htmlFor="Confirmacao-senha">Confirme sua senha</label>
            <input type="password" placeholder="*******"/>
            </div>
            <button className="button-cadastro">CADASTRAR</button>
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