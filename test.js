// // JavaScript code​​​​​​‌​​‌‌​​‌‌‌​​‌‌​‌​‌​​​​​‌‌ below
// // Use printErr(...) to debug your solution.
//
// function closestToZero(numbers) {
//   var clostest = 0;
//   if (numbers.length < 1 || numbers == "null") {
//     isCero();
//   } else {
//     numbers.forEach((num) => {
//       if (num < 0) {
//         num = num * -1;
//       }
//       if (clostest == 0) {
//         clostest = num;
//       } else {
//         if (clostest < num) {
//           console.log("Ok");
//         } else {
//           clostest = num;
//         }
//       }
//     });
//     return clostest;
//   }
// }
//
// function isCero() {
//   return 0;
// }


// JavaScript code​​​​​​‌​​‌‌​​‌‌‌​​‌‌​‌​‌​​​​​‌‌ below
// // Use printErr(...) to debug your solution.
//
// function a(i, j) {
//   if (i == 1 || j == 1){
//     return true;
//   }else{
//     var sum = i+j;
//     if (sum == 1) {
//       return true;
//     }else {
//       return false;
//     }
//   }
// }


//
//
// function solve(width, height, length, mass) {
//   var bulky = false;
//   var heavy = false;
//   // Obtain Volume
//   var volume = ((width * height) * length);
//   // Check mass
//   if (mass>=20){
//     heavy = true;
//   }
//   // Check other parameters
//   if (width>=150 || height>=150 || length>=150){
//     bulky = true;
//   }else if(volume>=1000000){
//     bulky = true;
//   }
//   //Choose the right stack
//   if (bulky==true && heavy==true){
//     return "REJECTED";
//   }else if(bulky != heavy){
//     return "SPECIAL";
//   }else if(bulky==false && heavy==false){
//     return "STANDARD";
//   }
// }


// var points = [];
// for(var i = 0; i < 10; i++) {
//     var x = Math.random();
//     var y = Math.random();
//     points.push([x, y]);
// }
//
// function approx(pts){
//   var menoresQueUno = [];
//
//   pts.forEach((item, i) => {
//     var punto = pts[i];
//     var x = pts[i][0];
//     var y = pts[i][1];
//     var potition = (x*x) + (y*y);
//     if (potition <= 1){
//       menoresQueUno.push(punto);
//     }
//   });
//   var aproximacionPi = 4 * (menoresQueUno.length / pts.length);
//   return aproximacionPi;
// }

function reshape(n, str) {
    //Quitar esacios
    var noSpacesStr = [];
    for(var i=0; i<str.length; i++){
      if(str[i] != " "){
        noSpacesStr.push(str[i]);
      }
    }
    //Imprimir
    var x = 0;
    var array = [];
    while(x < noSpacesStr.length){
      array.push(noSpacesStr.slice(x, x+n));
      x = x+n;
    }
    str = array;
    for(var i=0; i<str.length; i++){
    return str[i];
  }
}
