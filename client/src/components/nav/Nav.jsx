import React from "react";
import SearchBar from "../SearchBar";
import s from '../styles/Nav.module.css'
import { NavLink } from "react-router-dom";

const NavLinkMe = ({to , children,...props}) => {
  return(

  <NavLink 
  {...props} to ={to}
  className={({isActive}) => isActive ? s.active : s.disable}
  >
    {children}
  </NavLink>
  );
}

export default function Nav(props){
  const handleLogOut = () =>{
    props.logOut();
  };
    return(
        <div className={s.container}>
          <NavLinkMe to = "/home">Home</NavLinkMe>
          <NavLinkMe to ="/about"> About </NavLinkMe>
          <NavLinkMe to ="/favorites"> Favorite</NavLinkMe>
        <SearchBar onSearch={(characterID) => props.onSearch(characterID)}/>

          <button onClick={handleLogOut}>LogOut</button>
      </div>
     
    );
}