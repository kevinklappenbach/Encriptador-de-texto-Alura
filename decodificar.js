function decodificar(){

    document.getElementById("resultado1").innerHTML = "";
    document.getElementById("copiar").style.display = "flex";

    var texto = document.getElementById('texto').value;

    var cambiar = {

      ai:"a",
       enter:"e",
       imes:"i",
       ober:"o",
       ufat:"u"

    };

    var decodificar = new RegExp(Object.keys(cambiar).join("|"),"g");

    texto = texto.replace(decodificar, function(cambio){

        return cambiar[cambio];

    });

    document.getElementById("resultado").innerHTML = texto;

    }