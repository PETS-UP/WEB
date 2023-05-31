import Menu from "../../../components/Base/Menu/menu";
import './styleperfil.css';
import '../../stylepadrao.css';
import imgUser from '../../../assets/icons/ICON-BACHIRA-USER.jpg';

export default function Inicio() {
    return (
        <div className="container-main-perfil">
            
            <Menu/>
            <div className="content-card-perfil">

            <div className="perfil-content">
                <div className="items-perfil">
                    <div className="header-items-perfil">
                        <div className="img-user-perfil">
                            <img src={imgUser} />
                        </div>
                        <div className="text-user-perfil">
                            <p>William Matos</p>
                        </div>
                    </div>
                    <div className="inputs-items-perfil">

                    </div>
                </div>
            </div>            
                
            </div>
        </div>
    )
}