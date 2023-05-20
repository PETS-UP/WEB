import './styleCadastroEmpresa.css';
import Background from '../../../assets/images/PETSUP-BACKGROUND-COPIA.png';
import Image from '../../../assets/icons/PETSUP-CADASTRO-ICON.png';


const Cadastro = () => {

  return (
    <div className="container">
      <img src={Background} className="imagebg" />
      <div className="modal-login">
        <div className="modal-inputs">
          <div className="form-inputs">
            <div className="inputs-cadastro">
              <div className="inputs">
                <div className="inputs-nome">
                  <label htmlFor="Nome">Nome</label>
                  <input type="text" placeholder="Digite seu nome aqui" />
                  <div className="frases-validacao" id="frase-nome"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Email">E-mail</label>
                  <input type="email" placeholder="Digite seu e-mail aqui" />
                  <div className="frases-validacao" id="frase-email"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Senha">Senha</label>
                  <input type="password" placeholder="*******" />
                  <div className="frases-validacao" id="frase-senha"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Confirmacao-senha">Confirme sua senha</label>
                  <input type="password" placeholder="*******" />
                  <div className="frases-validacao"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Confirmacao-senha">Telefone</label>
                  <input type="text" placeholder="(55) 11 94002-8922" />
                  <div className="frases-validacao"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Confirmacao-senha">Razão social</label>
                  <input type="text" placeholder="Fofinho Petshop" />
                  <div className="frases-validacao"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Confirmacao-senha">CNPJ</label>
                  <input type="number" placeholder="4514298746124-F" />
                  <div className="frases-validacao"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Confirmacao-senha">CEP</label>
                  <input type="number" placeholder="801245-15" />
                  <div className="frases-validacao"></div>
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