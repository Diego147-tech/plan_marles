function doble(){

    var a1= parseFloat(document.numero.numero1.value);
    var a2= parseFloat(document.numero.numero2.value);
    var a3= parseFloat(document.numero.numero3.value);
    var a4= parseFloat(document.numero.numero4.value);
    
    //MAYORES
    if(a1>=a2 & a1>=a3 & a1>=a4){ //Si el mayor de todos es El numero 1
        document.numero.mayor.value= a1;
    }
    else if(a2>=a1 & a2>=a3 & a2>=a4){ //Si el mayor de todos es El numero 2
        document.numero.mayor.value= a2;
    }
    else if(a3>=a1 & a3>=a2 & a3>=a4){  //Si el mayor de todos es El numero 3
       document.numero.mayor.value= a3;
    }
    else if(a4>=a1 & a4>=a2 & a4>=a3){ //Si el mayor de todos es El numero 4
        document.numero.mayor.value= a4;
    }
    //MENORES
    if(a1<=a2 & a1<=a3 & a1<=a4){   //Si el menor de todos es El numero 1
        document.numero.menor.value= a1;
    }
    else if(a2<=a1 & a2<=a3 & a2<=a4){  //Si el menor de todos es El numero 2
        document.numero.menor.value= a2;
    }
    else if(a3<=a1 & a3<=a2 & a3<=a4){   //Si el menor de todos es El numero 3
       document.numero.menor.value= a3;
    }
    else if(a4<=a1 & a4<=a2 & a4<=a3){  //Si el menor de todos es El numero 4
       document.numero.menor.value= a4;
    }

    //Resultados Iguales
    if (a1==a2 & a2==a3 & a3==a4) {
        alert("TODOS SON EXACTAMENTE IGUALES")
    }
    else if (a1==a3 & a2==a4) { //Si el primero es igual al tercero
        alert("En esta forma el primero y el tercero son iguales junto" + "\nCon el segundo y el cuarto que tambien son iguales")
    }
    else if (a1==a2 & a3==a4) { //Si el primero es igual segundo 
        alert("En esta forma el primero y el segundo son iguales junto" + "\nCon el tercero y el cuarto que tambien son iguales")
    }
    else if (a1==a4 & a2==a3) {//Si el tercero es igual al cuarto
        alert("En esta forma el primero y el cuarto son iguales junto" + "\nCon el segundo y el tercero que tambien son iguales ")
    }

    //Pruebas mayores
    if (a1==a2 & a2==a3 & a4>a3) { //La cuarta opcion es la diferente
        alert("Las posiciones primera, segunda y tercera son iguales"+"\nEL unico diferente es: " + a4)
    }
    else if (a1==a3 & a3==a4 & a2>a1) {  //La segunda opcion es la diferente
        alert("Las posiciones primera, tercera y cuarta son iguales"+"\nEl unico diferente es: " + a2)
    }
    else if (a1==a2 & a2==a4 & a3>a1) {  //La Tercera opcion es la diferente
        alert("Las posiciones primera, segunda y cuarta son iguales"+"\nEl unico diferente es:"+ a3)
    }
    else if (a2==a3 & a3==a4 & a1>a2) { //La primera opcion es la unica diferente
        alert("Las posiciones segunda, tercera y cuarta son iguale"+"\nEl unico diferente es:"+ a1)
    }

    //Pruebas menores
    if (a1==a2 & a2==a3 & a4<a3) { //La cuarta opcion es la diferente
        alert("Las posiciones primera, segunda y tercera son iguales"+"\nEL unico diferente es: " + a4)
    }
    else if (a1==a3 & a3==a4 & a2<a1) {  //La segunda opcion es la diferente
        alert("Las posiciones primera, tercera y cuarta son iguales"+"\nEl unico diferente es: " + a2)
    }
    else if (a1==a2 & a2==a4 & a3<a1) {  //La Tercera opcion es la diferente
        alert("Las posiciones primera, segunda y cuarta son iguales"+"\nEl unico diferente es:"+ a3)
    }
    else if (a2==a3 & a3==a4 & a1<a2) { //La primera opcion es la unica diferente
        alert("Las posiciones segunda, tercera y cuarta son iguale"+"\nEl unico diferente es:"+ a1)
    }
}