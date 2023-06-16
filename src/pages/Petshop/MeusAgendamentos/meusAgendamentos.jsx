import "./meusAgendamentos.css";
import MenuPetshop from "../../../components/Base/Menu/menuPetshop";
import Calendario from "../../../components/Calendario/calendario";
import api from "../../../api";

const MeusAgendamentos = () => {

    function downloadTxt() {
        api.get(`/petshops/download/txt/${sessionStorage.ID_PETSHOP}`)
        .then((response) => {
            console.log(response)
        }).catch((erro) => {
            console.log(erro)
        })
    }

    function downloadCsv() {
        api.get(`/petshops/download/csv/${sessionStorage.ID_PETSHOP}`)
        .then((response) => {
            console.log(response)
        }).catch((erro) => {
            console.log(erro)
        })
    }

    return (
        <div className="content-main-meus-pedidos">
            <MenuPetshop />
            <Calendario />
            <button onClick={() => downloadTxt()} id='btn-txt'>Baixar TXT</button>
            <button onClick={() => downloadCsv()} id='btn-csv'>Baixar CSV</button>
        </div>

    );
}

export default MeusAgendamentos;