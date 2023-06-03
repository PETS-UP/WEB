import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Calendario/calendario.css";

function Calendario() {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div className="content-calendar-main">
            <div className="calendario-pets">
                <Calendar onChange={onChange} value={date} />
            </div>
        </div>
    );
}

export default Calendario;