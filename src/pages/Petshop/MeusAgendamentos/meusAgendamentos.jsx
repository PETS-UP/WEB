import "./meusAgendamentos.css";
import MenuPetshop from "../../../components/Base/Menu/menuPetshop";
import Calendario from "../../../components/Calendario/calendario"

const MeusAgendamentos = () => {

    return (
        <div className="content-main-meus-pedidos">
            <MenuPetshop />
            <Calendario />
        </div>

    );
}

export default MeusAgendamentos;