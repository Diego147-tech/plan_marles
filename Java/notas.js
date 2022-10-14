function note(){

    var n1= parseFloat(document.estudiantes.nota1.value);
    var n2= parseFloat(document.estudiantes.nota2.value);
    var n3= parseFloat(document.estudiantes.nota3.value);
    var n4= parseFloat(document.estudiantes.nota4.value);
    var n5= parseFloat(document.estudiantes.nota5.value);
   
    //Seccion porcentaje de cada nota
    document.estudiantes.note1.value= ("10%");
    document.estudiantes.note2.value= ("20%");
    document.estudiantes.note3.value= ("20%");
    document.estudiantes.note4.value= ("20%");
    document.estudiantes.note5.value= ("30%");
   
    lokus=n1*0.1 + n2*0.2+ n3*0.2+ n4*0.2+ n5*0.3;
    
    //Para nota inferior a 2.9
    if(lokus>=1.0 & lokus<=2.9){
        document.estudiantes.definitiva.value= (lokus + "  Dele pena con esa nota");
    }

    //Para nota inferior a 3.5
    if(lokus>=3.0 & lokus<=3.5){
        document.estudiantes.definitiva.value= (lokus + "  Paso raspando");
    }

    //Para nota inferior a 3.6
    if(lokus>=3.6 & lokus<=4.0){
        document.estudiantes.definitiva.value= (lokus + "  Buena");
    }
    //Para nota inferior a 4.1
    if(lokus>=4.1){
        document.estudiantes.definitiva.value= (lokus + "  Excelente");
    }

}