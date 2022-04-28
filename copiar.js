function copiar() {


    var copiar = document.getElementById('resultado').innerHTML;

    var text = "Example text to appear on clipboard";
     navigator.clipboard.writeText(copiar).then(function() {
      console.log('Async: Copying to clipboard was successful!');
     }, function(err) {
       console.error('Async: Could not copy text: ', err);
     });

     
   alert("Texto Copiado con exito");
}
