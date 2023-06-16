import "./meusAgendamentos.css";
import MenuPetshop from "../../../components/Base/Menu/menuPetshop";
import Calendario from "../../../components/Calendario/calendario";
import api from "../../../api";

const MeusAgendamentos = () => {

    function downloadTxt() {
        api.get(`/petshops/download/txt/${sessionStorage.ID_PETSHOP}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.JWT}`,
            },
        })
            .then((response) => {
                console.log(response)
            }).catch((erro) => {
                console.log(erro)
            })
    }

    function downloadCsv() {
        api.get(`/petshops/download/csv/${sessionStorage.ID_PETSHOP}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.JWT}`,
            },
        })
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
        </div >

    );
}

export default MeusAgendamentos;