import api from '../../../api';
import './styleCadastro.css';
import Background from '../../../assets/images/PETSUP-BACKGROUND-COPIA.png';
import Image from '../../../assets/icons/PETSUP-CADASTRO-ICON.png';
import { InputMask } from 'primereact/inputmask';
import { useState } from 'react';

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
      <div className="modal-login">
        <div className="modal-inputs">
          <div className="form-inputs">
            <div className="inputs-cadastro">
              <p>Faça seu cadastro</p>
              <div className="inputs">
                <div className="inputs-nome">
                  <label htmlFor="Nome">Nome</label>
                  <InputMask className="input-mask" value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Digite seu nome aqui" />
                  <div className="frases-validacao" id="frase-nome"></div>
                </div>
                <div className="inputs-email">
                  <label htmlFor="Email">E-mail</label>
                  <InputMask className="input-mask" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu e-mail aqui" />
                  <div className="frases-validacao" id="frase-email"></div>
                </div>
                <div className="inputs-password">
                  <label htmlFor="Senha">Senha</label>
                  <InputMask className="input-mask" value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="*******" />
                  <div className="frases-validacao" id="frase-senha"></div>
                </div>
                <div className="inputs-confirm-password">
                  <label htmlFor="Confirmacao-senha">Confirme sua senha</label>
                  <input className="input-mask" value={confirmacaoSenha} onChange={(e) => setConfirmacaoSenha(e.target.value)} type="password" placeholder="*******" />
                  <div className="frases-validacao"></div>
                </div>
                <button className="button-cadastro" onClick={cadastrar}>CADASTRAR</button>
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