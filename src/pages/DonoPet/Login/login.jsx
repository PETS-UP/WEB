import './styleLogin.css';
import Background from '../../../assets/images/PETSUP-BACKGROUND-COPIA.png'
import Image from '../../../assets/icons/PETSUP-LOGIN-ICON.png'

const Login = () => {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

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
              <p>Olá! Seja bem-vindo!</p>
              <div className="inputs">
                <div className="inputs-email">
                  <label htmlFor="Email">E-mail</label>
                  <InputMask className="input-mask" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="usuario@exemplo.com" />
                  <div className="frases-validacao" id="frase-email"></div>
                </div>
                <div className="inputs-password">
                  <label htmlFor="Senha">Senha</label>
                  <InputMask className="input-mask" value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="*******" />
                  <div className="frases-validacao" id="frase-senha"></div>
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
          <p>Os melhores pet shops perto de você.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;