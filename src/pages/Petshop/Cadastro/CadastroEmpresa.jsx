import api from '../../../api';
import './styleCadastroEmpresa.css';
import '../../Global/styleTooltip.css';
import Background from '../../../assets/images/PETSUP-BACKGROUND-COPIA.png';
import Image from '../../../assets/icons/PETSUP-CADASTRO-ICON.png';
import { InputMask } from 'primereact/inputmask';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

const Cadastro = () => {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("")
  const [telefone, setTelefone] = useState("")
  const [razaoSocial, setRazaoSocial] = useState("")
  const [cnpj, setCnpj] = useState("")
  const [cep, setCep] = useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")
  const [bairro, setBairro] = useState("")
  const [rua, setRua] = useState("")
  const [numero, setNumero] = useState("")

  const [cepData, setCepData] = useState(null)

  const buscarCep = async() => {
    if (cep.length === 8) {
      try {
        const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
        setCepData(response.data);
        setEstado(response.data.uf);
        setCidade(response.data.localidade);
        setBairro(response.data.bairro);
        setRua(response.data.logradouro)
      } catch (error) {
        console.log(error);
      }
    }
  };

  function cadastrar(e) {
    e.preventDefault();
    const petshop = {
      nome: nome,
      email: email,
      senha: senha,
      telefone: telefone,
      razaoSocial: razaoSocial,
      cnpj: cnpj,
      cep: cep,
      estado: estado,
      cidade: cidade,
      bairro: bairro,
      rua: rua,
      numero: numero
    }

    api.post('/petshops', petshop)
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
              <div className="inputs">
                <div className="inputs-padrao">
                  <label htmlFor="Nome">Nome</label>
                  <input data-tooltip-id='anchor' data-tooltip-content='Digite um nome válido (mínimo 3 letras)'
                  value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Digite seu nome aqui" />
                  <div className="frases-validacao" id="frase-nome"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Email">E-mail</label>
                  <input data-tooltip-id='anchor' data-tooltip-content='Digite um e-mail válido'
                  value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu e-mail aqui" />
                  <div className="frases-validacao" id="frase-email"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Senha">Senha</label>
                  <input value={senha} data-tooltip-id='anchor' data-tooltip-content='Digite uma senha válida (mínimo 6 caracteres e um caracter especial)'
                   onChange={(e) => setSenha(e.target.value)} type="password" placeholder="*******" />
                  <div className="frases-validacao" id="frase-senha"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Confirmacao-senha">Confirme sua senha</label>
                  <input value={confirmacaoSenha} data-tooltip-id='anchor' data-tooltip-content='Digite sua senha novamente, exatamente igual'
                  onChange={(e) => setConfirmacaoSenha(e.target.value)} type="password" placeholder="*******" />
                  <div className="frases-validacao"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Telefone-empresa">Telefone</label>
                  <InputMask value={telefone} data-tooltip-id='anchor' data-tooltip-content='Digite um telefone válido, incluindo o DDD'
                   onChange={(e) => setTelefone(e.target.value)} mask="(99) 99999-9999" unmask="true" type="text" placeholder="(11) 91234-5678" />
                  <div className="frases-validacao"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Razao-social-empresa">Razão social</label>
                  <input value={razaoSocial} data-tooltip-id='anchor' data-tooltip-content='Digite a razão social de sua empresa'
                  onChange={(e) => setRazaoSocial(e.target.value)} type="text" placeholder="Fofinho Petshop" />
                  <div className="frases-validacao"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="CNPJ-empresa">CNPJ</label>
                  <InputMask value={cnpj} data-tooltip-id='anchor' data-tooltip-content='Digite o CNPJ corretamente de sua empresa'
                   onChange={(e) => setCnpj(e.target.value)} mask="99.999.999/9999-99" unmask="true" type="text" placeholder="12.345.678/9012-34" />
                  <div className="frases-validacao"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Cep-endereco">CEP</label>
                  <InputMask value={cep} data-tooltip-id='anchor' data-tooltip-content='Digite o CEP do endereço de sua empresa'
                  onChange={(e) => setCep(e.target.value)} onBlur={buscarCep} mask="99999-999" unmask="true" type="text" placeholder="12345-678" />
                  <div className="frases-validacao"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Estado-endereco">Estado</label>
                  <input type="text" value={cepData?.uf || ""} data-tooltip-id='anchor' data-tooltip-content='Digite em que estado sua empresa está localizada' 
                  placeholder="SP" />
                  <div className="frases-validacao"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Cidade-endereco">Cidade</label>
                  <input type="text" value={cepData?.localidade || ""} data-tooltip-id='anchor' data-tooltip-content='Digite a cidade em que sua empresa está localizada'
                    placeholder="São Paulo" />
                  <div className="frases-validacao"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Bairro-endereco">Bairro</label>
                  <input type="text" value={cepData?.bairro || ""} data-tooltip-id='anchor' data-tooltip-content='Digite o bairro em que sua empresa está localizada'  
                  placeholder="Jardim São Paulo" />
                  <div className="frases-validacao"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Rua-endereco">Rua</label>
                  <input type="text" value={cepData?.logradouro || ""} data-tooltip-id='anchor' data-tooltip-content='Digite a rua em que sua empresa está localizada' 
                   placeholder="Av. João Salgueiro Neto" />
                  <div className="frases-validacao"></div>
                </div>
                <div className="inputs-padrao">
                  <label htmlFor="Numero-endereco">Número</label>
                  <input value={numero} data-tooltip-id='anchor' data-tooltip-content='Digite o número da rua de sua empresa' 
                  onChange={(e) => setNumero(e.target.value)} type="text" placeholder="123" />
                  <div className="frases-validacao"></div>
                </div>
                <button onClick={cadastrar} className="button-cadastro">CADASTRAR</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-image">
          <img src={Image} className="image-modal" />
        </div>
      </div>
      <Tooltip id='anchor' className='tooltip-custom'/>
    </div>
  );
}

export default Cadastro;