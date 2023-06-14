import "../Servicos/servicos.css";
import Menu from "../../../components/Base/Menu/menuPetshop";
import '../../stylepadrao.css';

const Servicos = () => {

    return (
        <div className="container-main-meus-pets">
        <Menu />
        <div className="content-meus-pets">

            <div className="titulo-meus-pets">
                <h2>Meus Serviços</h2>
            </div>

            <div className="selecionaveis-meus-pets">
                <button>ADICIONAR SERVIÇO +</button>
            </div>

            <div className="tabela-meus-pets">
                <table className="table-container">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Banho</td>
                            <td>R$ 15,00</td>
                            <td>Editar</td>
                            <td>Excluir</td>
                        </tr>
                        <tr>
                            <td>Tosa</td>
                            <td>R$ 25,00</td>
                            <td>Data 6</td>
                            <td>Data 6</td>
                        </tr> <tr>
                            <td>Banho & Tosa</td>
                            <td>R$ 40,00</td>
                            <td>Data 9</td>
                            <td>Data 9</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>

    </div >
    );
}

export default Servicos;