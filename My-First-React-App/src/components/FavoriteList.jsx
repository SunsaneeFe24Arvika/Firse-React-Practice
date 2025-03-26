import React from 'react'
import FavoriteItem from './FavoriteItem';

function FavoriteList() {
    const favs = [
        {
          name : 'fotboll',
          isCool: false
        },
        {
          name : 'tv-spel',
          isCool: true
        },
        {
          name : 'golf',
          isCool: true
        },
        {
          name : 'film',
          isCool: false
        },
        {
          name : 'mat',
          isCool: true
        },
      ];
  return (
   <ul>
    {
        favs.map((fav, index) => (
            <FavoriteItem key={index} name={fav.name} isCool={fav.isCool} />
        ))
    }
   </ul>
  );
}

export default FavoriteList 

