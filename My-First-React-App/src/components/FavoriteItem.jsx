import React from 'react'
import FavoriteList from './FavoriteList';

// function FavoriteItem({isCool, name}) {
    
//     return (
//         <li>
//             Det är {isCool ? '' : 'inte'} coolt med {name}
//         </li>
//     )

// }

//om man vill använda ikon ist av text
function FavoriteItem({ name, isCool }) {
    return <li>{name} {isCool ? "😎" : "😐"}</li>;
}




export default FavoriteItem