import api from '../../../api';
import Menu from "../../../components/Base/Menu/menu";
import './styleperfil.css';
import '../../stylepadrao.css';
import imgUser from '../../../assets/icons/ICON-PROFILE.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { InputMask } from 'primereact/inputmask';

export default function Inicio() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [cep, setCep] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [imagem, setImagem] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");

    useEffect(() => {
        api.get(`/clientes/${sessionStorage.ID_CLIENTE}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.JWT}`
            }
        })
            .then((resposta) => {
                setNome(resposta.data.nome);
                setEmail(resposta.data.email);
                setDataNasc(resposta.data.dataNasc);
                setCep(resposta.data.cep);
                setCpf(resposta.data.cpf);
                setTelefone(resposta.data.telefone);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []);

    const buscarCep = async () => {
        if (cep.length === 8) {
            try {
                const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
                setEstado(response.data.uf);
                setCidade(response.data.localidade);
                setBairro(response.data.bairro);
                setRua(response.data.logradouro)
            } catch (error) {
                console.log(error);
            }
        }
    };

    function atualizar(e) {
        e.preventDefault();
        const cliente = {
            nome: nome,
            email: email,
            dataNasc: dataNasc,
            cep: cep,
            cpf: cpf,
            telefone: telefone,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            rua: rua
        }

        api.patch(`/clientes/${id}`, cliente,
            {
                headers: {
                    Authorization: `Bearer ${sessionStorage.JWT}`
                }
            })
            .then((response) => {
                console.log(response)
            }).catch((erro) => {
                console.log(erro)
            });
    }

    return (
        <div className="container-main-perfil">

            <Menu />
            <div className="content-card-perfil">

                <div className="perfil-content">

                    <div className="items-perfil">

                        <div className="header-items-perfil">

                            <div className="img-user-perfil">
                                <img src={imgUser} />
                            </div>

                            <div className="text-user-perfil">
                                <p>{nome}</p>
                            </div>
                        </div>
                        <div className="inputs-items-perfil">
                            <div className="inputs-user-perfil">
                                <label htmlFor="Nome">Nome</label>
                                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" />
                                <label htmlFor="Nome">E-mail</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                                <label htmlFor="Nome">Data de nascimento</label>
                                <InputMask value={dataNasc} onChange={(e) => setDataNasc(e.target.value)} type="text" mask="9999-99-99" unmask="false" />
                            </div>
                            <div className="inputs-user-perfil">
                                <label htmlFor="Nome">CEP</label>
                                <InputMask value={cep} onChange={(e) => setCep(e.target.value)} type="text" onBlur={buscarCep} mask="99999-999" unmask="true" />
                                <label htmlFor="Nome">CPF</label>
                                <InputMask value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" mask="999.999.999-99" unmask="true" />
                                <label htmlFor="Nome">Telefone</label>
                                <InputMask value={telefone} onChange={(e) => setTelefone(e.target.value)} type="text" mask="(99) 99999-9999" unmask="true" />
                            </div>
                        </div>

                        <div className="btn-atualizar-perfil-petshop">
                            <button onClick={atualizar}>Atualizar informações</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}