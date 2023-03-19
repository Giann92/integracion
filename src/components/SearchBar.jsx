import { useState } from 'react';
import s from './styles/SearchBar.module.css'
export default function SearchBar(props) {
   const [character, setCharacter] = useState("");
   const handleInputChange = (event)=> {
      const {value} = event.target
      setCharacter(value);
   }
   return (
      <div className={s.searchContainer}>
         <input type='search' onChange={handleInputChange}/>
      <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
