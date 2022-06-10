
//TEST AREA
// let niveles = Number(prompt("Introduzca el numero de pisos. \n Debe ser un número válido."));
// if(isNaN(niveles)){
//   console.log("El valor introducido no es un número. \n Repita el proceso de nuevo.");
// }else{
//   drawTriangle(niveles);
// }

// Dibujar un triangulo cuando el pasasn los pisos
function drawTriangle(pisos){
  if (pisos !== 0) {
    var tri = "#";
    for (var i=0; i<pisos; i++){
      console.log(tri);
      tri = tri + "#";
    }
  } else {
    console.log("El triangulo no se dibujó porque tenía \'0\' pisos.");
  }
}

// Fizz Buzz
// Si es divisible por 3 Fizz, por 5 Buzz, por ambos FizzBuzz.
function fizzBuzz(){
  for(let i=1; i<=100; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

//Patron de Ajedrez
//Recibe anchura y altura
function chessChart(ancho, alto){
  let char = "", row = "";
  // Controla la cantidad de filas
  for(let i=0;i<alto;i++){
    //Controla la cantidad de columnas
    for(let x=0;x<ancho;x++){
      //La primera vez define con cual caracter empezar
      if (char == ""){
        char = " ";
        row = row + char;
      //Cambia el caracter para que no se repita
      } else if (char == " "){
        char = "#";
        row = row + char;
      } else if (char == "#"){
        char = " ";
        row = row + char;
      }
    }
    //Hace un salto de linea cuando llega al limite del ancho
    row = row + "\n";
    //Cambia el caracter final por el contrario para empezar la sigueinte linea
    //Excepto si el ancho es impar.
    if(char == "#" && ancho % 2 === 0){
      char = " ";
    } else if(char == " " && ancho % 2 === 0) {
      char = "#";
    }
  }
  //Devuelve toda la cadena completa
  console.log(row);
}

// Validación de correo electrónico
