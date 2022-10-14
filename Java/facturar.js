function nota(){

    var a1= parseFloat(document.fact.varticulo.value);
    var a2= parseFloat(document.fact.cantidad.value);
    var a3=parseFloat(document.fact.valortotal.value);
    var rdb1= document.getElementById("male");
    var rdb2= document.getElementById("famale");
    var rdb3= document.getElementById("fomale");

    valor= a1 * a2 ;
    descuento= a1*a2 * 0.2;
    descuento2= a1*a2 * 0.05;
    document.fact.valortotal.value= valor;

        if (rdb1.checked==true) {
             alert("Esta opcion posee un valor en descuento del 20%")
             document.fact.resultaf.value= (valor - descuento + " Es el Valor total");
        }
        else if(rdb2.checked==true){
            alert("Esta opcion posee un valor en descuento del 5%")
            document.fact.resultaf.value= (valor - descuento2 + " Es el Valor total");
        }
        else if(rdb3.checked==true){
            document.fact.resultaf.value= (valor + " Valor total");
     }
}

