// valor aleatorio generado
  var y = Math.floor(Math.random() * 10 + 1);
// contar el número de intentos
// crear para el intento correcto
// función para el número adivinado por el usuario     


function submit(){
    var x = document.getElementById("guessField").value;
    if(x == y)
    {
        alert("Felicidades, lo has adivinado correctamente");
    }
    else if(x > y)
    {
        alert("Intenta de nuevo con un numero menor");
    }
    else{
        alert("Intenta de nuevo con un numero mayor");
    }
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}