import { useState } from 'react';
import s from './styles/Form.module.css';
import {validate} from "./validation";



export default  function Form (props){

    const [userData, setUserData] = useState(
        {
            userName: "",
            password: "",
           
        });
     
        const [errors, setErrors] = useState(
            {
                userName: "",
                password: "",
            });
        const handleChange = (event) =>{
            const {name, value} = event.target;
            setUserData({
             ...userData, [name]: value,
            });
           setErrors(validate({
            ...userData, [name]: value,
           }))

        };
        const handleSubmit = (event) => {
            event.preventDefault()
            props.login(userData)
        }
    
    return(
        <form className={s.container} onSubmit = {handleSubmit}>
         <img className={s.img} src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/YHAUBUYW75FZVLG4Z4WL5S6LMY.jpg" alt="Not Found" />
         <br/>
         {/* USERNAME*/}
         <label htmlFor="">Nombre: </label>
         <input  className={s.input} 
                 type="text"
                 value={userData.userName} 
                 name="userName" 
                 onChange={handleChange}/>   
         {errors.userName ? <p className= {s.warnig}>{errors.userName}</p> : null}
        {/* PASSWORD */}
         <label htmlFor="">Password: </label>
         <input className={s.input}
                type="password" 
                value={userData.password} 
                name="password" 
                onChange={handleChange}/>
         {errors.password  ? <p className={s.warnig}>{errors.password}</p> : null}
         <br/>
         {/* BUTTON */}
         <button type="submit" className={s.button}>Login</button>
    
     </form>
)};