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
                        <div className="inputs-user-perfil">
                        <label htmlFor="Nome">Nome</label>
                            <input type="text" disabled placeholder="William Matos"/>
                        <label htmlFor="Nome">Email</label>
                            <input type="email" disabled placeholder="William.matos@sptech.school"/>
                        <label htmlFor="Nome">Data de nascimento</label>
                            <input type="text" disabled placeholder="02/08/99"/>
                        </div>
                        <div className="inputs-user-perfil">
                        <label htmlFor="Nome">CEP</label>
                            <input type="number" disabled placeholder="08145795-3"/>
                        <label htmlFor="Nome">CPF</label>
                            <input type="number" disabled placeholder="294.358.501-15"/>
                        <label htmlFor="Nome">TEL</label>
                            <input type="number" disabled placeholder="(11) 94956-3874"/>
                        </div>
                    </div>
                </div>
            </div>            
                
            </div>
        </div>
    )
}