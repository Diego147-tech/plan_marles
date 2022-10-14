function primeraecuacion(){  //Primera ecuacion

    var num1= parseFloat(document.primero.num1.value); //Cuadro 1
    var num2= parseFloat(document.primero.num2.value); //Cuadro 2
    var num3= parseFloat(document.primero.num3.value);  //Cuandro 3

    document.primero.respuesta.value= num1 * num2 + num3; //cuadro de respuesta
}

//Cambio a formulas a segunda
function segundoprimero(){  //Primera forma 2

    var num1= parseFloat(document.segundo1.num1.value);  //Cuadro 1
    var num2= parseFloat(document.segundo1.num2.value);  //Cuadro 2

    document.segundo1.respuesta.value= num1 * num2;  //cuadro de respuesta
} 

function segundo(){ //Segunda forma 2

    var num1= parseFloat(document.segundo2.num1.value);  //Cuadro 1
    var num2= parseFloat(document.segundo2.num2.value);  //Cuadro 2

    document.segundo2.respuesta.value= num1 / num2;
}

function tercero(){ //Tercera forma 2

    var num1= parseFloat(document.segundo3.num1.value);  //Cuadro 1
    var num2= parseFloat(document.segundo3.num2.value);  //Cuadro 2

    document.segundo3.respuesta.value= num1 / num2;  //cuadro de respuesta
}

//Cambio a formulas de tercera
function tercera(){ //primera forma 3

    var num1= parseFloat(document.tercero1.num1.value);  //Cuadro 1
    var num2= parseFloat(document.tercero1.num2.value);  //Cuadro 2

    document.tercero1.respuesta.value= num1 / num2;  //cuadro de respuesta
}

function tercerasegundo(){  //Segunda froma 3

    var num1= parseFloat(document.tercero2.num1.value);  //Cuadro 1
    var num2= parseFloat(document.tercero2.num2.value);  //Cuadro 2

    document.tercero2.respuesta.value= num1 / num2;  //cuadro de respuesta
}
 
function tercera2(){ //Tercera froma 3

    var num1= parseFloat(document.tercero3.num1.value);  //Cuadro 1
    var num2= parseFloat(document.tercero3.num2.value);  //Cuadro 2

    document.tercero3.respuesta.value= num1 * num2;  //cuadro de respuesta
} 