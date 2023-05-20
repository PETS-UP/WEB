import Menu from "../../../components/Base/Menu/menu";
import '../MeusPets/meusPets.css'

export default function meusPets() {

    return (
        <div className="container-main">
            <Menu />
            <div className="content-main">
                <h2>PETS CADASTRADOS</h2>

                <div className="content">

                    <div className="content2">

                        <div className="teste">

                            <label htmlFor="filtrar">Filtrar:</label>

                            <select name="" id="filtro">
                                <option value="value1">Nome</option>
                                <option value="value2">Tipo</option>
                            </select>
                    
                            <input type="text" />
                            <button>ADICIONAR PET +</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}