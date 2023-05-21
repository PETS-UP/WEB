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

                            <select className="filtro" name="">
                                <option value="value1">Nome</option>
                                <option value="value2">Tipo</option>
                            </select>

                            <input type="text" />
                            <button>ADICIONAR PET +</button>
                        </div>
                        <div className="tabela">
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
                </div>

            </div>

        </div>
    )
}