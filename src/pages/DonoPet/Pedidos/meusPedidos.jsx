import './meusPedidos.css'
import Menu from '../../../components/Base/Menu/menu';



const MeusPedidos = () => {

    return (
        <div className="content-main-meus-agendamentos">
            <Menu />

            <div className="container-main-pedidos-cliente">

                <div className='titulo-pedidos-cliente'>

                    <h2>
                        Meus Pedidos
                    </h2>
                    <div className='borda-pedidos-cliente'></div>

                </div>

                <div className='itens-pedidos-cliente'>
                    <table className="table-container">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Tipo</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fluffy</td>
                                <td>Cachorro</td>
                                <td>Data 3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    );
}

export default MeusPedidos;