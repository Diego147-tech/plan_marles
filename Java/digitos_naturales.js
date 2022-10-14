function natural(){

    var num= parseFloat(document.digitos.numero.value);  //Variable que ingresa por teclado

    if (num>=1.0 & num<=9.9) {  //DE 1 a 9
        alert("La cifra que se digito solo tiene un digito")
    }
    else if (num>=10 & num<=99) { //De 10 a 99
        alert("La cifra que digito tiene DOS digitos")
    }
    else if (num>=100 & num<=999) {//De 100 a 999
        alert("La cifra que digito tiene TRES digitos")
    }
    else if (num>=1000 & num<=9999) {  //De 1.000 a 9.999
        alert("La cifra que digito tiene CUATRO digitos")
    }
    else if (num>=10000 & num<=99999) { //De 10.000 a 99.999
        alert("La cifra que digito tiene CINCO digitos")
    }
    else if (num>=100000 & num<=999999) {  //De 100.000 a 999.999
        alert("La cifra que digito tiene SEIS digitos")
    }
    else if (num>=1000000) {  //Del Millon hacia arriba
        alert("LA CIFRA QUE DIGITO ES DEMASIDO ALTA Y SOBRE PASA EL VALOR")
    }
}