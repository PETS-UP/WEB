import './styleLogin.css';
import Background from '../../assets/images/PETSUP-BACKGROUND-COPIA.png'
import Image from '../../assets/icons/PETSUP-LOGIN-ICON.png'

const Login = () => {
  return (
    <div className="container">
      <img src={Background} className="imagebg" />
      <div className="modal-login">
      <div className="modal-inputs">
      <div className="form-inputs">
      <div className="index-cadastro">
      <p>Ainda não se cadastrou?</p> 
      <button className="button-cadastro">CADASTRAR</button>
      </div> 
      <div className="inputs-cadastro">
        <p>Olá! Seja bem-vindo</p>
        <div className="inputs">
          <div className="inputs-email">
          <label htmlFor="Email">Email</label>
          <input type="text" placeholder="Digite seu email aqui"/>
          </div>
          <div className="inputs-password">
          <label htmlFor="Email">Senha</label>
          <input type="password" placeholder="*******"/>
          </div>
          <button className="button-cadastro">ENTRAR</button>
        </div>
      </div>
      </div>
      </div>
      <div className="modal-image">
      <p>HOME</p>
      <img src={Image} className="image-modal" />
      <p>PETSUP</p>
      <p>Os melhores pet-Shops perto de você.</p>
      </div>
      </div>
    </div>
  );
}

export default Login;