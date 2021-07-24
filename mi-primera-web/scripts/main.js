var miImage = document.querySelector ("img");


   miImage.onclick = function () {
    var miSrc = miImage.getAttribute("src");
    if ( miSrc === "images/quibdo-678x381.jpg")
    {
      miImage.setAttribute("src", "images/quibdó.jpg");
    }
    else {
      miImage.setAttribute("src", "images/quibdo-678x381.jpg");
    }

}

var miBoton= document.querySelector("button");
var miTitulo= document.querySelector("h1");

function EstableceNombreUsuario(){
  var miNombre = prompt("por favor, ingresa tu nombre.");
  localStorage.setItem("nombre", miNombre);
  miTitulo.textContent = "Quibdo," + miNombre;

}


if (!localStorage.getItem("nombre")) {
  EstableceNombreUsuario();

}

else {
  var nombreAlmacendado = localStorage.getItem("nombre");
  miTitulo.textContent = "quibdo," + nombreAlmacendado;
}

miBoton.onclick = function() {
  EstableceNombreUsuario();
}
