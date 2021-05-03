/* eslint-disable */


//retorna true o false si el valor ingresado es o no un email 
export const isEmail = (email) => {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
        return true;
    }
    return false
}

//regresa un objeto error si la contraseña es debil : {error: "mensaje de error"}
export const isStrongPwd = (password) => {
    if(password.length >= 8)
    {
        var upperCase = false;
        var lowerCase = false;
        var number = false;
        var rareCharacter = false;
        
        for(var i = 0;i<password.length;i++)
        {
            if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90)
            {
                upperCase = true;
            }
            else if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)
            {
                lowerCase = true;
            }
            else if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)
            {
                number = true;
            }
            else
            {
                rareCharacter = true;
            }
        }
        if(!upperCase) return {error: "la contraseña debe incluir mayúsculas"};
        if(!lowerCase) return {error: "la contraseña debe incluir minusculas"};
        if(!number) return {error: "la contraseña debe incluir números"};
        if(!rareCharacter) return {error: "la contraseña debe incluir caracteres especiales"};
        return true;
    }
    else return {error: "la contraseña debe tener al menos 8 caracteres"};
}