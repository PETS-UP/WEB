import api from "../../../api";
import "./styleLogin.css";
import Background from "../../../assets/images/PETSUP-BACKGROUND-COPIA.png";
import Image from "../../../assets/icons/PETSUP-LOGIN-ICON.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastComponent } from "../../../components/Toast/Toast";
import React from "react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logar(e) {
    e.preventDefault();
    const cliente = {
      email: email,
      senha: senha,
    };

    api.post("/clientes/login", cliente)
      .then((response) => {
        sessionStorage.ID_CLIENTE = response.data.clienteId;
        sessionStorage.NOME = response.data.nome;
        sessionStorage.JWT = response.data.token;
        ToastComponent({
          title: "Login realizado com sucesso!",
          text: "Você será redirecionado em breve.",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        })
        setTimeout(() => {
          navigate("/inicio");
        }, "2000");
      })
      .catch((erro) => {
        console.log(erro);
        ToastComponent({
          title: "Não foi possível realizar o login.",
          text: "Por favor, verifique seu e-mail e senha.",
          icon: "error"
        });
      });
  }

  return (
    <div className="container">
      <img src={Background} className="imagebg" />
      <div className="modal-login-cliente">
        <div className="modal-inputs-cliente">
          <div className="form-inputs-cliente">
            <div className="index-cadastro-cliente">
              <p>Ainda não se cadastrou?</p>
              <button
                onClick={() => navigate("/cadastro-cliente")}
                className="button-cadastro-cliente"
              >
                CADASTRAR
              </button>
            </div>
            <div className="inputs-cadastro-cliente">
              <p>Olá! Seja bem-vindo!</p>
              <div className="inputs-cliente">
                <div className="inputs-email-cliente">
                  <label htmlFor="Email">E-mail</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="usuario@exemplo.com"
                  />
                  <div className="frases-validacao" id="frase-email"></div>
                </div>
                <div className="inputs-password-cliente">
                  <label htmlFor="Senha">Senha</label>
                  <input
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    type="password"
                    placeholder="*******"
                  />
                  <div className="frases-validacao" id="frase-senha"></div>
                </div>
                <button className="button-cadastro-cliente" onClick={logar}>
                  ENTRAR
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-image-cliente">
          <p>HOME</p>
          <img src={Image} className="image-modal" />
          <p>PETSUP</p>
          <p>Os melhores pet shops perto de você.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
