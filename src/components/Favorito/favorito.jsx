import '../Favorito/favorito.css'
import React, { useState, useEffect } from 'react';

const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState(false);



    useEffect(() => {
        const storedFavorite = localStorage.getItem('favorite');
        if (storedFavorite) {
            setIsFavorite(JSON.parse(storedFavorite));
        }
    }, []);



    const toggleFavorite = () => {
        const updatedFavorite = !isFavorite;
        setIsFavorite(updatedFavorite);
        localStorage.setItem('favorite', JSON.stringify(updatedFavorite));
    };



    return (
        <div
            className={`favorite-button ${isFavorite ? 'favorite' : ''}`}
            onClick={toggleFavorite}
        >
            <span role="img"
                aria-label="Heart"
                style={{ fontSize: '30px' }}>
                {!isFavorite ? '❤️' : '🖤'}
            </span>
        </div>
    );
};



export default FavoriteButton;