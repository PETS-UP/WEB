import React, { useState } from "react";
import Calendar from "react-calendar";
import api from "../../api"
import "react-calendar/dist/Calendar.css";
import "../Calendario/calendario.css";
import { useEffect } from "react";

function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`;
}

function Calendario() {
    const [hour, setHour] = useState();
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [pedido, setPedido] = useState({});

    const onChange = (newDate) => {
        setDate(newDate);
    };

    const handleDayClick = (value) => {
        setSelectedDate(value);
        console.log(value.toISOString());
        getInformacoesPedido(selectedDate);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const acceptSchedule = () => {
        date.setHours(13, 10)
        console.log(date.toISOString())
    }

    function getInformacoesPedido(date) {
        api
            .get(`/report/agendamento/${sessionStorage.ID_PETSHOP}`, {
                params: {
                    dataHora: date
                },
                headers: {
                    Authorization: `Bearer ${sessionStorage.JWT}`
                }
            })
            .then(({ data }) => {
                console.log(data);
                setPedido(data);
            })
            .catch((error) => {
                console.log(error);
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
                <button onClick={() => downloadCsv()} id='btn-csv'>Baixar CSV</button>
                <button onClick={() => downloadTxt()} id='btn-txt'>Baixar TXT</button>
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

                                <div className="container-modal-calendario">

                                    <div className="retangulo-calendario">

                                        <div className="ajuste-espacamento-calendario">
                                            <label htmlFor="">Cliente</label>
                                            <input type="text" value={pedido.nomeCliente} disabled />
                                        </div>

                                        <div className="ajuste-espacamento-calendario">
                                            <label htmlFor="">Horário</label>
                                            <input type="time" value={pedido.dataHora} onChange={(e) => setHour(e.target.value)} />
                                        </div>
                                    </div>

                                </div>

                                <div className="container-modal-calendario">

                                    <div className="retangulo-calendario">

                                        <div className="ajuste-espacamento-calendario">
                                            <label htmlFor="">Serviço</label>
                                            <input type="text" value={pedido.servico} disabled />
                                        </div>

                                        <div className="ajuste-espacamento-calendario">
                                            <label htmlFor="">Data</label>
                                            <input type="text" value={() => formatDate(pedido.dataHora)} disabled />
                                        </div>

                                    </div>

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