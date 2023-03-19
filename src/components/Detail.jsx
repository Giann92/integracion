import React, { useState , useEffect }from "react";
import {useParams, useNavigate} from 'react-router-dom';
import s from './styles/Detail.module.css'


export default function Detail(props){
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    useEffect(() => {   
  fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
  .then((res) => res.json())
  .then((data)=> {
   data.name ? setCharacter(data) : alert("No hay personaje con ese ID")
  })
  .catch((err) => {
   console.log(err)
   alert("Hubo un error inesperado")
  });
   return ()=> setCharacter({})
    },[detailId])

   return(
<div className={s.container}>
   <div>
      <button onClick={()=> navigate(-1)}>Back</button>
   </div>
<div>
<h1>Name: {character.name}</h1>
    <h1>Status: {character.status}</h1>
    <h1>Specie: {character.species}</h1>
    <h1>Gender: {character.gender}</h1>
    <h1>Origin: {character.origin?.name}</h1>
</div>
<img src= {character.image} alt="No Found"/>
</div>
   )
}