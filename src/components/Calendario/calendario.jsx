import React, { useState } from "react";
import Calendar from "react-calendar";
import api from "../../api"
import "react-calendar/dist/Calendar.css";
import "../Calendario/calendario.css";
import { ToastComponent } from "../Toast/Toast";
import LinhaTabela from "./components/LinhaTabela";

function Calendario() {
    const [hour, setHour] = useState();
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [listaPedido, setListaPedido] = useState([]);
    const [formatedDate, setFormatedDate] = useState();

    const onChange = (newDate) => {
        setDate(newDate);
    };

    const handleDayClick = (value) => {
        setSelectedDate(value);
        setFormatedDate(value.toISOString().substring(0, 19))
    };

    const closeModal = () => {
        setPedido({});
        setShowModal(false);
    };

    const acceptSchedule = () => {
        date.setHours(13, 10)
    }

    function formatDate(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`;
    }

    function downloadTxt() {
        fetch(`http://localhost:8080/petshops/download/txt/${sessionStorage.ID_PETSHOP}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.JWT}`
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.blob();
                }
                throw new Error('Erro ao realizar o download');
            })
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'arquivo.txt';
                link.click();
                URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function downloadCsv() {
        fetch(`http://localhost:8080/petshops/download/csv/${sessionStorage.ID_PETSHOP}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.JWT}`
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.blob();
                }
                throw new Error('Erro ao realizar o download');
            })
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'arquivo.txt';
                link.click();
                URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function getInformacoesPedido(date) {
        api
            .get(`/agendamentos/report/agendamento/${sessionStorage.ID_PETSHOP}`, {
                params: {
                    dataHora: formatedDate
                },
                headers: {
                    Authorization: `Bearer ${sessionStorage.JWT}`
                }
            })
            .then(({ data }) => {
                setListaPedido(data);
                setShowModal(true);
            })
            .catch((error) => {
                ToastComponent("Nenhum pedido encontrado na data selecionada", "", true, false)
            });
    }

    return (
        <div className="content-calendar-main">
            <div className="titulo-meus-pedidos">
                <h2>Agendamentos</h2>
                <div className='borda-cadastro-pet'></div>
            </div>
            <div className="calendario-pets">
                <Calendar onChange={onChange} value={date} onClickDay={handleDayClick} />
            </div>

            <div className="btn-importacao-meus-agendamentos">
                <button onClick={() => downloadCsv()} className='btn-laranja'>Baixar CSV</button>
                <button onClick={() => getInformacoesPedido(selectedDate)} className="btn-roxo">Exibir agendamentos</button>
                <button onClick={() => downloadTxt()} className='btn-laranja'>Baixar TXT</button>
            </div>

            {showModal && (
                <div className="modal-overlay">

                    <div className="modal">

                        <div className="content-fechar-modal-calendario">
                            <button onClick={closeModal}>x</button>
                        </div>

                        <h3>Informações do pedido</h3>
                        <div className="borda"></div>
                        <p>Data: {selectedDate && formatDate(selectedDate)}</p>
                        {
                            <div className="content-modal-calendario">

                                <div className="tabela-meus-pets">
                                    <table className="table-container">
                                        <thead>
                                            <tr>
                                                <th>Cliente</th>
                                                <th>Espécie</th>
                                                <th>Sexo</th>
                                                <th>Excluir</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listaPedido.map((pedido) => (
                                                <LinhaTabela
                                                    nomeCliente={pedido.nomeCliente}
                                                    hora={pedido.DataHora.substring(11, 19)}
                                                    servico={pedido.servico}
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        }

                        <div className="buttons-agendamento-calendario">

                            <button className="btn-cancelar-agendamento-calendario" onClick={closeModal}>Cancelar agendamento</button>
                            <button className="btn-aceitar-agendamento-calendario" onClick={acceptSchedule}>Aceitar agendamento</button>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Calendario;