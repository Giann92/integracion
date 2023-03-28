const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const validLettersAndNumbers = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/);
 export const validate = (inputs) => {
    const errors = {}
    if(!regexEmail.test(inputs.userName)){
        errors.userName ="Debe ser un email valido"
    }
    if(!inputs.userName){
        errors.userName = "no puede ser vacio"
    }
    if(inputs.userName.length > 35){
        errors.userName = "No puede tener mas de 35 caracteres"
    }
    if(!validLettersAndNumbers.test(inputs.password)){
        errors.password = "La contraseña debe tener al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico."
    } if(inputs.password.length < 6 || inputs.password.length > 10){
        errors.password= "La contraseña debe tener al entre 6 y 10 caracteres"
    }
    return errors;   
   
}