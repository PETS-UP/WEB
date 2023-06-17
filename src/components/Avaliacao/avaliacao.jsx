import React, { useEffect, useState } from 'react';
import '../Avaliacao/avaliacao.css'

const Avaliacao = ({ totalStars, onStarClick }) => {
    
    const [estrelas, setEstrelas] = useState(
        parseInt(localStorage.getItem('estrelas')) || 0
    );

    useEffect(() => {
        localStorage.setItem('estrelas', estrelas.toString());
    }, [estrelas]);

    const handleStarClick = (stars) => {
        setEstrelas(stars);
        onStarClick(stars);
    };

    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
        stars.push(
            <span
                key={i}
                className={i <= estrelas ? 'star selected' : 'star'}
                onClick={() => handleStarClick(i)}
            >
                &#9733;
            </span>
        );
    }

    return <div>{stars}</div>;
};

export default Avaliacao;