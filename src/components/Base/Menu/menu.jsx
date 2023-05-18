import './styleMenu.css';
import LabelMenu from '../../LabelMenu/LabelMenu';
import inicio from "../../../assets/icons/ICON-HOME.png"
import perfil from "../../../assets/icons/ICON-USER.png"
import pets from "../../../assets/icons/ICON-PATA-BRANCA.png"
import enderecos from "../../../assets/icons/ICON-MARCADOR.png"
import pedidos from "../../../assets/icons/ICON-CALENDARIO.png"
import sair from "../../../assets/icons/ICON-SAIR.png"

const Menu = () => {
    return (
        <div className='menu-lateral'>
            <div className='img-user' />
            <div className='container-icons'>
                <LabelMenu img={inicio} item="Inicio" />
                <LabelMenu img={perfil} item="Meu Perfil" />
                <LabelMenu img={pets} item="Meus Pets" />
                <LabelMenu img={enderecos} item="Endereços" />
                <LabelMenu img={pedidos} item="Meus pedidos" />
            </div>
            <LabelMenu img={sair} item="Sair" />
        </div>
    )
}

export default Menu;