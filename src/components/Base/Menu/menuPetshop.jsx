import './styleMenu.css';
import LabelMenu from '../../LabelMenu/LabelMenu';
import inicio from "../../../assets/icons/ICON-HOME.png"
import perfil from "../../../assets/icons/ICON-USER.png"
import gerenciamento from "../../../assets/icons/DASH-ICON.png"
import pedidos from "../../../assets/icons/ICON-CALENDARIO.png"
import sair from "../../../assets/icons/ICON-SAIR.png"
import { useNavigate } from 'react-router-dom';

const MenuPetshop = () => {

    const navigate = useNavigate();

    return (
        <div className='menu-lateral'>
            <div className='img-user' />
            <div className='container-icons'>
                {/* <div className='div-menu-lateral-edit' onClick={() => navigate('/inicio')}>
                    <LabelMenu img={inicio} item="Inicio" />
                </div> */}

                <div className='div-menu-lateral-edit' onClick={() => navigate('/perfil-petshop')}>
                    <LabelMenu img={perfil} item="Meu Petshop" />
                </div>

                <div className='div-menu-lateral-edit' onClick={() => navigate('/dashboard')}>
                    <LabelMenu img={gerenciamento} item="Gerenciamento" />
                </div>

                <div className='div-menu-lateral-edit' onClick={() => navigate('/agendamentos')}>
                    <LabelMenu img={pedidos} item="Agendamentos" />
                </div>
            </div>

            <div className='div-menu-lateral-edit' onClick={() => { sessionStorage.clear(), navigate('/') } }>
                <LabelMenu img={sair} item="Sair" />
            </div>

        </div >

    )
}

export default MenuPetshop;