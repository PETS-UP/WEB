import Menu from "../../../components/Base/Menu/menu";
import '../MeusPets/meusPets.css'

export default function meusPets() {

    return (
        <div className="container-main-meus-pets">
            <Menu />
            <div className="content-meus-pets">

                <div className="titulo-meus-pets">
                    <h2>PETS CADASTRADOS</h2>
                </div>

                <div className="selecionaveis-meus-pets">
                    <div className="filtro-pets">

                        <label htmlFor="">Filtrar:</label>
                        <select className="filtro-meus-pets" name="Filtrar" id="">
                            <option value="nome">Nome</option>
                            <option value="tipo">Tipo</option>
                        </select>

                    </div>
                    <input type="text" />

                    <button>ADICIONAR PET +</button>
                </div>

                <div className="tabela-meus-pets">
                    <table className="table-container">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Tipo</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fluffy</td>
                                <td>Cachorro</td>
                                <td>Data 3</td>
                                <td>Data 4</td>
                            </tr>
                            <tr>
                                <td>Data 4</td>
                                <td>Data 5</td>
                                <td>Data 6</td>
                                <td>Data 6</td>
                            </tr> <tr>
                                <td>Data 7</td>
                                <td>Data 8</td>
                                <td>Data 9</td>
                                <td>Data 9</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>

        </div >
    )
}


<table className="table-container">
    <thead>
        <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Editar</th>
            <th>Excluir</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Fluffy</td>
            <td>Cachorro</td>
            <td>Data 3</td>
            <td>Data 4</td>
        </tr>
        <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
            <td>Data 6</td>
        </tr> <tr>
            <td>Data 7</td>
            <td>Data 8</td>
            <td>Data 9</td>
            <td>Data 9</td>
        </tr>
    </tbody>
</table> 