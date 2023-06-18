import React from "react";

export default function Card({ title, value }) {
    return (
        <div className="metricas-dashboard">
            <p className="title-metrica">{title}</p>
            <p className="value-dashboard">{value}</p>
        </div>
    )
}