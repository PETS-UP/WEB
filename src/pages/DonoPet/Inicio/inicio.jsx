import Menu from "../../../components/Base/Menu/menu";
import '../Inicio/styleinicio.css';

export default function Inicio() {

    return (
        <div className="container-main">
            <Menu/>
            <div className="content">
                <div className="filter">
                    <div className="filter-header">
                       <button><img className="image-button" src="/src/assets/icons/ICON-BUSCA.png"/></button><input type="search" name="busca" placeholder="Digite aqui o nome do petshop"/>
                    </div>
                    <div className="filter-buttons">
                        <button>Melhores preços</button>
                        <button>Melhores avaliações</button>
                        <button>Próximos de mim</button>
                        <button>Meus favoritos</button>
                    </div>
                </div>
            </div>
        </div>
    )
}