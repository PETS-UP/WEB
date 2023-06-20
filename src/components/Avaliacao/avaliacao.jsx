import React, { useEffect, useState } from 'react';
import '../Avaliacao/avaliacao.css'
import api from '../../api';

const Avaliacao = ({ totalStars, onStarClick, id }) => {
    
    const [estrelasState, setEstrelasState] = useState();

    useEffect(() => {
        api
          .get(`/clientes/avaliacao/${sessionStorage.ID_CLIENTE}/${id}`, {
            headers: {
              Authorization: `Bearer ${sessionStorage.JWT}`,
            },
          })
          .then((response) => {
            if (response.status === 200) {
                setEstrelasState(response.data.nota);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, [])

    const handleStarClick = (stars) => {
        setEstrelasState(stars);
        onStarClick(stars);
    };

    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
        stars.push(
            <span
                key={i}
                className={i <= estrelasState ? 'star selected' : 'star'}
                onClick={() => handleStarClick(i)}
            >
                &#9733;
            </span>
        );
    }

    return <div>{stars}</div>;
};

export default Avaliacao;