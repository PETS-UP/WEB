import './styleMenu.css';
import LabelMenu from '../../LabelMenu/LabelMenu';
import inicio from "../../../assets/icons/ICON-HOME.png"
import perfil from "../../../assets/icons/ICON-USER.png"
import pets from "../../../assets/icons/ICON-PATA-BRANCA.png"
import enderecos from "../../../assets/icons/ICON-MARCADOR.png"
import pedidos from "../../../assets/icons/ICON-CALENDARIO.png"
import sair from "../../../assets/icons/ICON-SAIR.png"
import { useNavigate } from 'react-router-dom';

const Menu = () => {

    const navigate = useNavigate();

    return (
        <div className='menu-lateral'>
            <div className='img-user' />
            <div className='container-icons'>
                <div className='div-menu-lateral-edit' onClick={() => navigate('/inicio')}>
                    <LabelMenu img={inicio} item="Inicio" />
                </div>

                <div className='div-menu-lateral-edit' onClick={() => navigate('/perfil-cliente')}>
                    <LabelMenu img={perfil} item="Meu Perfil" />
                </div>

                <div className='div-menu-lateral-edit' onClick={() => navigate('/meus-pets')}>
                    <LabelMenu img={pets} item="Meus Pets" />
                </div>

                <div className='div-menu-lateral-edit' onClick={() => navigate('/meus-pedidos')}>
                    <LabelMenu img={pedidos} item="Meus pedidos" />
                </div>
            </div>

            <div className='div-menu-lateral-edit' onClick={() => navigate('/')}>
                <LabelMenu img={sair} item="Sair" />
            </div>
        </div >
    )
}

export default Menu;