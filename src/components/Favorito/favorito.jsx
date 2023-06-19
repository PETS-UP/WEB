import '../Favorito/favorito.css'
import React from 'react';

const FavoriteButton = ({isFavorite, toggleFavorite}) => {

    return (
        <div
            className={`favorite-button ${isFavorite ? 'favorite' : ''}`}
            onClick={toggleFavorite}
        >
            <span role="img"
                aria-label="Heart"
                style={{ fontSize: '30px' }}>
                {isFavorite ? '❤️' : '🖤'}
            </span>
        </div>
    );
};



export default FavoriteButton;