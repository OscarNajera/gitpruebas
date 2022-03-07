alert("saludos")

function aleatorio( ) {
    return Math.random() * (10 - 1) + 1;
  }

let x = aleatorio( )
let documento = document.getElementById("aleatorio")

documento.write(x)

