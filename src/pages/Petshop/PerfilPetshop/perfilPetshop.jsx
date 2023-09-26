import "../PerfilPetshop/perfilPetshop.css";

import Menu from "../../../components/Base/Menu/menuPetshop";

import imgUser from "../../../assets/icons/ICON-PETSHOP.png";

import { useState } from "react";
import { useEffect } from "react";
import { InputMask } from "primereact/inputmask";
import api from "../../../api";
import { ToastComponent } from "../../../components/Toast/Toast";
import Select from "react-select";

const PerfilPetshop = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [telefone, setTelefone] = useState("");
    const [imagem, setImagem] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [horaAbertura, setHoraAbertura] = useState("");
    const [horaFechamento, setHoraFechamento] = useState("");
    const [diasFuncionais, setDiasFuncionais] = useState("");


    const [isEdicaoHabiliata, setisEdicaoHabiliata] = useState(false);

    useEffect(() => {
        api
            .get(`/petshops/${sessionStorage.ID_PETSHOP}`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.JWT}`,
                },
            })
            .then((resposta) => {
                setNome(resposta.data.nome);
                setEmail(resposta.data.email);
                setNumero(resposta.data.numero);
                setCep(resposta.data.cep);
                setCnpj(resposta.data.cnpj);
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
                setRua(response.data.logradouro);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const opcoesDias = [
        {value: 0, label: 'Segunda'},
        {value: 1, label: 'Terça'},
        {value: 2, label: 'Quarta'},
        {value: 3, label: 'Quinta'},
        {value: 4, label: 'Sexta'},
        {value: 5, label: 'Sábado'},
        {value: 6, label: 'Domingo'}
    ]

    function habilitarEdicao() {
        setNome(nome)
        setEmail(email)
        setNumero(numero)
        setCep(cep)
        setCnpj(cnpj)
        setTelefone(telefone)
        buscarCep()
        setisEdicaoHabiliata(true)
    }

    function atualizar(e) {
        e.preventDefault();
        const petshop = {
            nome: nome,
            email: email,
            cep: cep,
            cnpj: cnpj,
            telefone: telefone,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero,
        };
        api
            .patch(`/petshops/${sessionStorage.ID_PETSHOP}`, petshop, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.JWT}`,
                },
            })
            .then((response) => {
                console.log(response);
                ToastComponent({
                    title: "Perfil editado com sucesso!",
                    icon: "success"
                });
            })
            .catch((erro) => {
                console.log(erro);
                ToastComponent({
                    title: "Não foi possível editar o perfil.",
                    text: "Por favor, tente novamente.",
                    icon: "error"
                });
            });
        setisEdicaoHabiliata(true)
    };

    return (

        <div className='content-main-perfil-petshop'>
            <Menu />

            <div className="content-card-perfil-petshop">

                <div className="perfil-content-petshop">

                    <div className="items-perfil-petshop">

                        <div className="header-items-perfil-petshop">

                            <div className="img-user-perfil-petshop">
                                <img src={imgUser} />
                            </div>

                            <div className="text-user-perfil-petshop">
                                <p>{nome}</p>
                            </div>

                        </div>
                        <div className="inputs-items-perfil-petshop">
                            <div className="inputs-user-perfil-petshop">
                                <label htmlFor="Nome">Nome</label>
                                <input
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    type="text"
                                    disabled={!isEdicaoHabiliata} />
                                <label htmlFor="E-mail">E-mail</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    disabled={!isEdicaoHabiliata} />
                                <label htmlFor="NumeroEndereço">N° de endereço</label>
                                <input
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                    type="text"
                                    disabled={!isEdicaoHabiliata} />
                                <div className="input-horarios">
                                    <div>
                                        <label htmlFor="Hora de Abertura">Hora de Abertura</label>
                                        <input
                                            value={horaAbertura}
                                            onChange={(e) => setHoraAbertura(e.target.value)}
                                            type="time"
                                            disabled={!isEdicaoHabiliata} />
                                    </div>
                                    <div>
                                        <label htmlFor="Hora de Fechamento">Hora de Fechamento</label>
                                        <input
                                            value={horaFechamento}
                                            onChange={(e) => setHoraFechamento(e.target.value)}
                                            type="time"
                                            disabled={!isEdicaoHabiliata} />
                                    </div>
                                </div>
                            </div>
                            <div className="inputs-user-perfil-petshop">
                                <label htmlFor="Nome">CEP</label>
                                <InputMask
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                    type="text"
                                    onBlur={buscarCep}
                                    mask="99999-999"
                                    unmask="true"
                                    disabled={!isEdicaoHabiliata} />
                                <label htmlFor="Nome">CNPJ</label>
                                <InputMask
                                    value={cnpj}
                                    onChange={(e) => setCnpj(e.target.value)}
                                    type="text"
                                    mask="999.999.999-99"
                                    unmask="true"
                                    disabled={!isEdicaoHabiliata} />
                                <label htmlFor="Nome">Telefone</label>
                                <InputMask
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                    type="text"
                                    mask="(99) 99999-9999"
                                    unmask="true"
                                    disabled={!isEdicaoHabiliata} />
                                <label htmlFor="Nome">Dias abertos</label>
                                <Select
                                className="select-dia"
                                isMulti
                                closeMenuOnSelect = {false}
                                isSearchable = {false}
                                placeholder = "Selecione os dias"
                                options={opcoesDias}
                                isDisabled={!isEdicaoHabiliata} />

                            </div>
                        </div>

                        <div className="btn-atualizar-perfil-petshop">
                            <button
                                onClick={habilitarEdicao}
                            >Habilitar edição
                            </button>

                            <button
                                disabled={!isEdicaoHabiliata}
                                onClick={atualizar}
                            >Salvar
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerfilPetshop;