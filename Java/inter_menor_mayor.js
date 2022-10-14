function double(){
    var num1= parseFloat(document.numeros.numero1.value);  /*Variable Numero 1*/
    var num2= parseFloat(document.numeros.numero2.value);  /*Variable Numero 2*/
    var num3= parseFloat(document.numeros.numero3.value);  /*Variable Numero 3*/

    if (num1<num2 & num2<num3) { /*Posible condicion*/
        document.numeros.resulmayor.value= num3; /*NUM Mayor*/
        document.numeros.resulinter.value= num2; /*NUM Intermedio*/
        document.numeros.resulmenor.value= num1; /*NUM MENOR*/

    } else if (num1<num3 & num3<num2) {/*Posible condicion*/
        document.numeros.resulmayor.value= num2; /*NUM Mayor*/
        document.numeros.resulinter.value= num3;
        document.numeros.resulmenor.value= num1;
    
    } else if (num2<num1 & num1<num3) { /*Posible condicion*/
        document.numeros.resulmayor.value= num3; /*NUM Mayor*/
        document.numeros.resulinter.value= num1; /*NUM Intermedio*/
        document.numeros.resulmenor.value= num2; /*NUM MENOR*/
    
    } else if (num1>num3 & num3>num2 & num2<num1){  /*Posible condicion*/
        document.numeros.resulmayor.value= num1;  /*NUM Mayor*/
        document.numeros.resulinter.value= num3; /*NUM Intermedio*/
        document.numeros.resulmenor.value= num2;
    
    }else if(num1>num2 & num2>num3){  /*Posible condicion*/
        document.numeros.resulmayor.value= num1; /*NUM Mayor*/
        document.numeros.resulinter.value= num2; /*NUM Intermedio*/
        document.numeros.resulmenor.value= num3; /*NUM MENOR*/
    }
    
    else if(num3<num1 & num1<num2 & num2>num3){  /*Posible condicion*/
        document.numeros.resulmayor.value= num2; /*NUM Mayor*/
        document.numeros.resulinter.value= num1;  /*NUM Intermedio*/
        document.numeros.resulmenor.value= num3; /*NUM MENOR*/
    }
    
    //Para casos iguales
    if(num1==num2==num3){  /*Posible condicion*/
       alert("TODOS SON EXACTAMENTE IGUALES")
    }
    //Primera convinacion
    else if (num1==num2 & num2<num3) { /*Posible condicion*/
        alert("Son iguales el primer numero y segundo numero" + "\nEl unico diferente es:  " + num3)
    }else if (num1==num2 & num2>num3) { /*Posible condicion*/
        alert("Son iguales el primer numero y segundo numero" + "\nEl unico diferente es:  " + num3)
    }
    //Segunda convinacion
    else if (num2==num3 & num1>num2) { /*Posible condicion*/
        alert("Son iguales el segundo y tercer numero" + "\nEl unico diferente es:  " + num1)
    }else if (num2==num3 & num1<num2) { /*Posible condicion*/
        alert("Son iguales el segundo y tercer numero" + "\nEl unico diferente es:  " + num1)
    }
    //Tercera convinacion
    else if (num1==num3 & num2>num3) { /*Posible condicion*/
        alert("Son iguales el primer y tercer numero" + "\nEl unico diferente es:  " + num2)
    }else if (num1==num3 & num2<num3) {
        alert("Son iguales el primer y tercer numero" + "\nEl unico diferente es:  " + num2)
    }
}