//alert("saludos")

function aleatorio( ) {
    return Math.random() * (10 - 1) + 1;
  }

let x = aleatorio( )
let y = document.getElementById("aleatorio")
 
y.innerHTML=x

