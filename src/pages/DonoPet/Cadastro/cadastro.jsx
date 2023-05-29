import api from '../../../api';
import Background from '../../../assets/images/PETSUP-BACKGROUND-COPIA.png';
import Image from '../../../assets/icons/PETSUP-CADASTRO-ICON.png';
import { InputMask } from 'primereact/inputmask';
import { useState } from 'react';
import '../Cadastro/styleCadastro.css';

const Cadastro = () => {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("")

  function cadastrar(e) {
    e.preventDefault();
    const cliente = {
      nome: nome,
      email: email,
      senha: senha
    }

    api.post('/clientes', cliente)
    .then((response) => {
      console.log(response)
    }).catch((erro) => {
      console.log(erro)
    })
  }

  return (
    <div className="container">
      <img src={Background} className="imagebg" />
      <div className="modal-login-cliente">
        <div className="modal-inputs-cliente">
          <div className="form-inputs-cliente">
            <div className="inputs-cadastro-cliente">
              <p>Faça seu cadastro</p>
              <div className="inputs-cliente">
                <div className="inputs-nome-cliente">
                  <label htmlFor="Nome">Nome</label>
                  <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Digite seu nome aqui" />
                  <div className="frases-validacao" id="frase-nome"></div>
                </div>
                <div className="inputs-email-cliente">
                  <label htmlFor="Email">E-mail</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu e-mail aqui" />
                  <div className="frases-validacao" id="frase-email"></div>
                </div>
                <div className="inputs-password-cliente">
                  <label htmlFor="Senha">Senha</label>
                  <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="*******" />
                  <div className="frases-validacao" id="frase-senha"></div>
                </div>
                <div className="inputs-confirm-password-cliente">
                  <label htmlFor="Confirmacao-senha">Confirme sua senha</label>
                  <input value={confirmacaoSenha} onChange={(e) => setConfirmacaoSenha(e.target.value)} type="password" placeholder="*******" />
                  <div className="frases-validacao"></div>
                </div>
                <button className="button-cadastro-cliente" onClick={cadastrar}>CADASTRAR</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-image-cliente">
          <img src={Image} className="image-modal-cliente" />
        </div>
      </div>
    </div>
  );
}

export default Cadastro;