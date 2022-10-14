function mayorymenor(){  //Funcion para que se ejecute
   var num1= parseFloat(document.menorymayor.Numero1.value);   //Declarar variables del html
   var num2= parseFloat(document.menorymayor.Numero2.value);   //Declarar variables del html
    
   if(num1>num2){    //En caso de ser esto 
      document.menorymayor.resulmayor.value= num1;  //Resultado en pantalla
      document.menorymayor.resulmenor.value= num2;//Resultado en pantalla
  }else if(num2 > num1){  //En caso de ser eso
      document.menorymayor.resulmayor.value= num2;  //Resultado en pantalla 
      document.menorymayor.resulmenor.value= num1;   //Resulatado en pantalla
  } else{
  alert("Ambos Numeros Son iguales")  //Ventana de SAlerta en caso de este caso
  }
}