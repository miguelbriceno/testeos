
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


//Par o Impar recurisvo
/* Usa recursividad para ir restando de a dos en dos a un número n, hasta que
llega a 0 o 1, y eso lo define como par o impar. Devuelve "true" si es par*/
function esPar(n) {
  if (typeof n == "number"){
    //En caso de que se ingrese un número negativo
    n = Math.abs(n);
    if (n == 0) {
      return true;
    } else if (n == 1) {
      return false;
    } else {
      n = n - 2;
      //Aqui implementa recursividad al llamarse a si misma.
      return esPar(n);
    }
  } else {
    console.log(n + " no es un numero, pruebe ingresando un número.");
  }
}



// Contar carácteres
/*Recibe dos cadenas y devuelve un arreglo con dos argunmentos:
1) El número de veces que el primer caracter de la segunda cadena está en la primera cadena.
2) Un arreglo con las pociciones en que se encuentra dicho caracter en la segunda cadena.
*/
function countChar(cadena, c) {
  if (c.length > 1) {
    console.log("Ten en cuenta que solo se contarán el número de veces que se halle el primer caractér de \'" + c + "\' es decir \'" + c[0] + "\'.");
  }
  let sum = 0;
  let posArray = [];
  let dataBack = [];
  for(let i=0; i<cadena.length; i++) {
    if (c[0] == cadena[i]) {
      sum++;
      posArray.push(i);
    }
  }
  dataBack.push(sum);
  dataBack.push(posArray);
  return dataBack;
}


// Generación de rangos
/*Recibe un numero de partida, un final y un intervalo para generar un rango*/
function newRange(inicio, final, intervalo) {
  let rangeArray = [];
  if (inicio == undefined || final == undefined) {   // Validar si hay datos
    console.log("Error0: Ingresa un inicio, un final y un intervalo (opcional, por defecto se usará 1 o -1).");
  } else if (typeof inicio != "number" || typeof final != "number") { // Validar si son números
    console.log("Error1: Los datos ingresados deben ser números.");
  } else if (inicio == final) { // Validar si inicio y final son diferentes
    console.log("Error2: No se puede generar un rango entre números iguales.");
  } else if (typeof intervalo != "number" && intervalo != undefined) { // Validar si Hay un intervalo definido y valido o defiirlo
    console.log("Error3: El intervalo definido no es correcto, Debe ser un número.");
  } else if (intervalo == 0 || intervalo == undefined) {
    console.log("Warning1: El intervalo es cero o no fue definido, se usará el valor por defecto");
    if (inicio < final) {intervalo = 1;} else if (inicio > final) {intervalo = -1;}
  } else if (inicio < final && intervalo < 0) {
    console.log("Error4: Los datos son incompatibles. No se puede generar un rango.");
  } else if (inicio > final && intervalo > 0) {
    console.log("Error5: Los datos son incompatibles. No se puede generar un rango.");
  } else {
    // console.log("Validaciones completadas");
  }
  // Pasadas las validaciones, se generan los rangos
  if (intervalo > 0){ // Generar rango positivo
    while (inicio <= final) {
      rangeArray.push(inicio);
      inicio += intervalo;
    }
  } else if (intervalo < 0){ // Generar rango negativo
    while (inicio >= final) {
      rangeArray.push(inicio);
      inicio += intervalo;
    }
  }
  return rangeArray;
}


// Validación de correo electrónico
