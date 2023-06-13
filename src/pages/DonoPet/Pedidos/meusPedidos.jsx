import './meusPedidos.css'
import Menu from '../../../components/Base/Menu/menu';
import { useEffect, useState } from 'react';
import api from '../../../api';



const MeusPedidos = () => {
    const [cliente, setCliente] = useState();


    useEffect(() => {
        api.get("/agendamentos/cliente").then(({data}) => {
            console.log(data);
            setCliente(data);
        }).catch((error) => {
            console.log(error)
        })
    }, [])

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
                                <th>Pet</th>
                                <th>Serviço</th>
                                <th>Data Hora</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Data 1</td>
                                <td>Data 2</td>
                                <td>Data 3</td>
                                <td>Data 4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    );
}

export default MeusPedidos;