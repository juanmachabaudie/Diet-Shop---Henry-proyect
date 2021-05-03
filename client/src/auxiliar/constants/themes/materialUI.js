//colores:
export var 
    primaryColor = "white",
    secondaryColor = "black",
    color3 = "white",
    color4 = "white",
    color5 = "white";

export var theme = true;

if (theme){
    primaryColor = "#16ffbd";
    secondaryColor = "#f070a1";
    color3 = "#12c998";
    color4 = "#c34271";
    color5 = "#439f76";
}

export const setTheme = () => {
    return theme = !theme;
} 