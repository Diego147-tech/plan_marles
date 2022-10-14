function dividir(){  //Para hacer division 
    var n1 = parseFloat(document.form4.numero1.value);  //Variable 1
    var n2 = parseFloat(document.form4.numero2.value);  //Variable 2
    document.form4.resultado.value=n1/n2;  //Muestra en Cuadro de respuesta
}

function lok(){   //Para hacer modulo
    var a1 = parseInt(document.form5.numero1.value);   //Variable 1
    var a2 = parseInt(document.form5.numero2.value);  //Variable 2
    document.form5.resultado.value= a1 % a2 ; //Muestra en Cuadro de respuesta
}

function multiplicacion()  //Para hacer multiplicacion
{
    var a1 = parseInt(document.form3.numero1.value);  //Variable 1
    var a2 = parseInt(document.form3.numero2.value);  //Variable 2
document.form3.resultado.value= a1*a2; //Muestra en Cuadro de respuesta
}

function resta() { //Para hacer resta
    var a1 = parseInt(document.form1.numero1.value);  //Variable 1
    var a2 = parseInt(document.form1.numero2.value);  //Variable 2
    document.form1.resultado.value= a1-a2;  //Muestra en Cuadro de respuesta
  }

  function suma() { //Para hacer suma
    var a1 = parseInt(document.form2.numero1.value);  //Variable 1
    var a2 = parseInt(document.form2.numero2.value);  //Variable 2
    document.form2.resultado.value= a1+a2;   //Muestra en Cuadro de respuesta
  }