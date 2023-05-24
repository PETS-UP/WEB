import Menu from "../../../components/Base/Menu/menu";
import '../Inicio/styleinicio.css';
import ImgPetshop from '../../../assets/images/fofinho-pet-shop-image.jpg';
import '../../stylepadrao.css';

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
                <div className="cards-petshop">
                    <div className="card-items-petshop">
                        <div className="card-image-petshop"><img src={ImgPetshop} /></div>
                        <div className="card-info-petshop">
                            <div className="card-info-petshop-title">
                                <div className="info-petshop-title">
                                    <p>Fofinho PetShop</p>
                                </div>
                            </div>
                            <div className="card-info-petshop-content">
                                <div className="petshop-content-title">
                                    <div className="petshop-content-servicos">

                                    </div>
                                    <div className="petshop-content-preco">

                                    </div>
                                </div>
                                <div className="petshop-content-subtitle">
                                    <div className="petshop-content-distancia">

                                    </div>
                                    <div className="petshop-content-tempo">
                                        
                                    </div>
                                    <div className="petshop-content-status">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}