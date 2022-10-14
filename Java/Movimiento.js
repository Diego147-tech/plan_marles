//Ejecutar funcion
document.getElementById("btn_open").addEventListener("click", open_close_menu);  //Cuando se oprima el boton se ejecute
//Variables
var side_menu = document.getElementById("menu_side");   //menu de la seccion header
var btn_open = document.getElementById("btn_open"); //Menu general en azul
var body = document.getElementById("body");  //Cuerpo completo 

function open_close_menu(){   //Realizar funcion 
    body.classList.toggle("body_mobe");
    side_menu.classList.toggle("menu_side_mobe");
}