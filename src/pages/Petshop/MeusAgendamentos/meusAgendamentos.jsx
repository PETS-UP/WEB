import "./meusAgendamentos.css";
import MenuPetshop from "../../../components/Base/Menu/menuPetshop";
import Calendario from "../../../components/Calendario/calendario";
import api from "../../../api";

const MeusAgendamentos = () => {

    
    return (
        <div className="content-main-meus-pedidos">
            <MenuPetshop />
            <Calendario />
        </div >

    );
}

export default MeusAgendamentos;