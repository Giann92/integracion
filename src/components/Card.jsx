import React from 'react';
import { Link } from 'react-router-dom';
import s from './styles/Card.module.css';

export default function Card({id ,name, species, gender , image, onClose}) {
   return (
      <Link to= {`/detail/${id}`} className={s.link}>
        <div className={s.Card}>
         <div className = {s.btnContainer}>
         <button onClick={onClose} className={`${s.btn} ${s.btnColor}`}>X</button> 
         </div>
         <div className={s.imgContainer}>
         <img className={s.img} src={image} alt="Not Found" />
         <h2 className={s.name}>{name}</h2>
         </div>
         <div className= {s.propsContainer}>
         <h2 className={s.species}>{species}</h2>
         <h2 className={s.genders}>{gender}</h2> 
         </div>
      </div>
      </Link>
   );
}
