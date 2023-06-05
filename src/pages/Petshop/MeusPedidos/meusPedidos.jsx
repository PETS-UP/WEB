import "../MeusPedidos/meusPedidos.css";
import Menu from "../../../components/Base/Menu/menu";
import Calendario from "../../../components/Calendario/calendario"

const MeusPedidos = () => {

    return (
        <div className="content-main-meus-pedidos">
            <Menu />
            <Calendario />
        </div>

    );
}

export default MeusPedidos;