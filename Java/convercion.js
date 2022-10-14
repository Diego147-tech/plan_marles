function kilo(){ //Para kilometros

    var ka= parseFloat(document.convertir.valor.value);//Variable unica

    document.convertir.respuesta.value= (ka / 1000+" Km"); //Proceso de convercion de M a KM
}

function deca(){  //Para decametros

    var dec= parseFloat(document.convertir2.valor.value);  //Variable unica

    document.convertir2.respuesta.value= (dec / 10 +" Dam");  //Proceso de conversion de Metros a decametros
}

function deci(){ //Para hacer decimetros 

    var dic= parseFloat(document.convertir3.valor.value);  //Variable unica

    document.convertir3.respuesta.value= (dic * 10 + " Dm"); //Proceso de conversion de Metros a decimetros
}

function cent(){

    var lo= parseFloat(document.convertir4.valor.value);

    document.convertir4.respuesta.value= (lo * 100 + " Cm");
}


