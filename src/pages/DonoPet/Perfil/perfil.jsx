import api from '../../../api';
import Menu from "../../../components/Base/Menu/menu";
import './styleperfil.css';
import '../../stylepadrao.css';
import imgUser from '../../../assets/icons/ICON-PROFILE.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { InputMask } from 'primereact/inputmask';
import { ToastComponent } from "../../../components/Toast/Toast";

export default function Inicio() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [image, setImage] = useState({
        selectedFile: null
    });
    const [imagemPerfil, setImagemPerfil] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");

    const [isEdicaoHabiliata, setisEdicaoHabiliata] = useState(false);

    useEffect(() => {
        api.get(`/clientes/${sessionStorage.ID_CLIENTE}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.JWT}`
            }
        })
            .then((resposta) => {
                setNome(resposta.data.nome);
                setEmail(resposta.data.email);
                setCep(resposta.data.cep);
                setCpf(resposta.data.cpf);
                setTelefone(resposta.data.telefone);
                setNumero(resposta.data.numero);
                setImagemPerfil(resposta.data.imagemPerfil);
                sessionStorage.IMG_PERFIL = resposta.data.imagemPerfil
                sessionStorage.NOME = resposta.data.nome
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

    function habilitarEdicao() {
        setNome(nome)
        setEmail(email)
        setCep(cep)
        setCpf(cpf)
        setTelefone(telefone)
        setNumero(numero)
        buscarCep()
        setisEdicaoHabiliata(true)
    }

    function atualizar(e) {
        e.preventDefault();
        editarFotoPerfil();
        const cliente = {
            nome: nome,
            email: email,
            cep: cep,
            cpf: cpf,
            telefone: telefone,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero,
        }

        api.patch(`/clientes/${sessionStorage.ID_CLIENTE}`, cliente,
            {
                headers: {
                    Authorization: `Bearer ${sessionStorage.JWT}`
                }
            })
            .then((response) => {
                console.log(response)
                ToastComponent({
                    title: "Perfil editado com sucesso!",
                    icon: "success"
                });
            }).catch((erro) => {
                console.log(erro)
                ToastComponent({
                    title: "Não foi possível editar o perfil.",
                    text: "Por favor, tente novamente.",
                    icon: "error"
                });
            });
        setisEdicaoHabiliata(true);
    }

    function fileSelectedHandler(event) {
        setImage({
            selectedFile: event.target.files[0]
        })
    }

    function editarFotoPerfil() {
        const fd = new FormData()
        if (image.selectedFile != null) fd.append('image', image.selectedFile, image.selectedFile.name);

        api.put(`/clientes/atualizar-imagem/${sessionStorage.ID_CLIENTE}`, fd, {
            headers: {
                Authorization: `Bearer ${sessionStorage.JWT}`
            }
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    let imagemDoCliente =
        sessionStorage.IMG_PERFIL != "https://petsupstorage.blob.core.windows.net/imagesstorage/null"
            && sessionStorage.IMG_PERFIL != "https://petsupstorage.blob.core.windows.net/imagesstorage/"
            ? sessionStorage.IMG_PERFIL : imgUser

    return (
        <div className="container-main-perfil">

            <Menu />
            <div className="content-card-perfil">

                <div className="perfil-content">

                    <div className="items-perfil">

                        <div className="header-items-perfil">

                            <div className="container-img-perfil">
                                <div className="img-user-perfil">
                                    <img src={imagemDoCliente} />
                                </div>
                                <label htmlFor="input-imagem" className="label-imagem">
                                    Editar imagem
                                    <input className="input-imagem" type="file"
                                        onChange={fileSelectedHandler} />
                                </label>
                            </div>
                            <div className="text-user-perfil">
                                <p>{nome}</p>
                            </div>
                        </div>
                        <div className="inputs-items-perfil">
                            <div className="inputs-user-perfil">
                                <label htmlFor="Nome">Nome</label>
                                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" disabled={!isEdicaoHabiliata} />
                                <label htmlFor="Nome">E-mail</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" disabled={!isEdicaoHabiliata} />
                                <label htmlFor="Nome">N° de endereço</label>
                                <input value={numero} onChange={(e) => setNumero(e.target.value)} type="text" disabled={!isEdicaoHabiliata} />
                            </div>
                            <div className="inputs-user-perfil">
                                <label htmlFor="Nome">CEP</label>
                                <InputMask value={cep} onChange={(e) => setCep(e.target.value)} type="text" onBlur={buscarCep} mask="99999-999" unmask="true" disabled={!isEdicaoHabiliata} />
                                <label htmlFor="Nome">CPF</label>
                                <InputMask value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" mask="999.999.999-99" unmask="true" disabled={!isEdicaoHabiliata} />
                                <label htmlFor="Nome">Telefone</label>
                                <InputMask value={telefone} onChange={(e) => setTelefone(e.target.value)} type="text" mask="(99) 99999-9999" unmask="true" disabled={!isEdicaoHabiliata} />
                            </div>
                        </div>

                        <div className="btn-atualizar-perfil-petshop">
                            <button onClick={habilitarEdicao}>Habilitar edição</button>
                            <button disabled={!isEdicaoHabiliata} onClick={atualizar}>Salvar</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}