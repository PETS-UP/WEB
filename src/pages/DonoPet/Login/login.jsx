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
        sessionStorage.JWT = response.data.token;
        ToastComponent("Login realizado com sucesso!", "", 1500, true, "success");
        setTimeout(() => {
          navigate("/inicio");
        }, "1500");
      })
      .catch((erro) => {
        console.log(erro);
        ToastComponent("Não foi possível realizar o login.", "Por favor, verifique seu e-mail e senha.", 2000, true, "error");
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
