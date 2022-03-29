'use strict'
// num = 1101
function BinarioADecimal(num) {
  // tu codigo aca
var spliteado = num.split('').reverse();
var decimal = 0;
for(var i = spliteado.length-1; i >= 0; i--){
  decimal += spliteado[i] * (2 ** [i]);
}
return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
//dividir el decimal en 2 y acumular el resto de la division
var binario = [];
while(num > 0){
  binario.push(num % 2);
  num = Math.floor(num/2);
}
return binario.reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}