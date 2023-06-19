import api from '../../../api';
import Background from '../../../assets/images/PETSUP-BACKGROUND-COPIA.png';
import Image from '../../../assets/icons/PETSUP-CADASTRO-ICON.png';
import { InputMask } from 'primereact/inputmask';
import React, { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import '../../Global/styleTooltip.css';
import '../Cadastro/styleCadastro.css';
import { Tooltip } from 'react-tooltip';
import { ToastComponent } from '../../../components/Toast/Toast';
import Swal from 'sweetalert2';

const Cadastro = () => {

  const navigate = useNavigate();

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
      console.log(response);
      Swal.fire({
        title: "Cadastro realizado com sucesso!",
        subtitle: "Você será redirecionado em breve.",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      })
      setTimeout(() => {
        navigate("/login-cliente");
    }, "2000")

    }).catch((erro) => {
      console.log(erro)
      ToastComponent("Não foi possível realizar o cadastro.", "Por favor, tente novamente.", "error")
    })
    
  }

  return (
    <div className="container">
      
      <img src={Background} className="image-background-cadastro" />
      <div className="modal-login-cliente">
        <div className="modal-inputs-cliente">
          <div className="form-inputs-cliente">
            <div className="inputs-cadastro-cliente">
              <p>Faça seu cadastro</p>
              <div className="inputs-cliente">
                <div className="inputs-nome-cliente">
                  <label htmlFor="Nome">Nome</label>
                  <input data-tooltip-id='anchor' data-tooltip-content='Digite um nome válido (mínimo 3 letras)' 
                  value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Digite seu nome aqui" />
                  <div className="frases-validacao" id="frase-nome"></div>
                </div>
                <div className="inputs-email-cliente">
                  <label htmlFor="Email">E-mail</label>
                  <input value={email} data-tooltip-id='anchor' data-tooltip-content='Digite um e-mail válido' 
                  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu e-mail aqui" />
                  <div className="frases-validacao" id="frase-email"></div>
                </div>
                <div className="inputs-password-cliente">
                  <label htmlFor="Senha">Senha</label>
                  <input value={senha} data-tooltip-id='anchor' data-tooltip-content='A senha deve conter no mínimo 6 caracteres e 1 caracter especial' 
                  onChange={(e) => setSenha(e.target.value)} type="password" placeholder="*******" />
                  <div className="frases-validacao" id="frase-senha"></div>
                </div>
                <div className="inputs-confirm-password-cliente">
                  <label htmlFor="Confirmacao-senha">Confirme sua senha</label>
                  <input value={confirmacaoSenha} data-tooltip-id='anchor' data-tooltip-content='Confirme a senha digitando ela exatamente igual' 
                  onChange={(e) => setConfirmacaoSenha(e.target.value)} type="password" placeholder="*******" />
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
      <Tooltip id='anchor' className='tooltip-custom'/>
    </div>

    
  );
}

export default Cadastro;