import './styleLoginEmpresa.css';
import Background from '../../../assets/images/PETSUP-BACKGROUND-COPIA.png'
import Image from '../../../assets/icons/PETSUP-LOGIN-ICON.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginEmpresa = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function logar(e) {
    e.preventDefault();
    const petshop = {
      email: email,
      senha: senha
    }

    api.post('/petshops/login', petshop) 
    .then((response) => {
      console.log(response)
    })
    .catch((erro) => {
      console.log(erro)
    })
  }

  return (
    <div className="container">
      <img src={Background} className="imagebg" />
      <div className="modal-login">
        <div className="modal-inputs">
          <div className="form-inputs">
            <div className="index-cadastro">
              <p>Ainda não se cadastrou?</p>
              <button onClick={() => navigate('/cadastro-empresa')} className="button-cadastro">CADASTRAR</button>
            </div>
            <div className="inputs-cadastro">
              <p>Olá! Seja bem-vindo!</p>
              <div className="inputs-cliente">
                <div className="inputs-email">
                  <label htmlFor="Email">E-mail</label>
                  <input type="email" placeholder="usuario@exemplo.com" />
                  <div className="frases-validacao" id="frase-email"></div>
                </div>
                <div className="inputs-password">
                  <label htmlFor="Senha">Senha</label>
                  <input type="password" placeholder="*******" />
                  <div className="frases-validacao" id="frase-senha"></div>
                </div>
                <button onClick={logar} className="button-cadastro">ENTRAR</button>
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

export default LoginEmpresa;